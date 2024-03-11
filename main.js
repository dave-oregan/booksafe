const { app, BrowserWindow, ipcMain, shell, dialog } = require('electron')
const path = require('path')
const fs = require('fs')
const zipper = require('jszip')

function createWindow () {
    // Basic setup for the window
    const win = new BrowserWindow({
        width: 1350,
        height: 850,
        minWidth: 650,
        minHeight: 350,
        autoHideMenuBar: true,
        icon: __dirname + '/src/lockicon.ico',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // This is the path for a location on the device where the app has write access
    var __user = app.getPath('userData')

    // Saves passwords to the passwords folder
    ipcMain.handle('create-file', (event, sit, content, divikey) => {
        if (!sit || !content || !divikey) { return false }

        const potentialFile = sit.replace(/[^a-zA-Z0-9]/g,'_')

        var filePath = path.join(__user, 'passwords', `${potentialFile}.txt`)

        var diff = 0

        if (fs.existsSync(filePath)) {
            while (fs.existsSync(filePath)) {
                diff++
                filePath = path.join(__user, 'passwords', `${potentialFile}${diff}.txt`)
            }
        }

        if (diff > 0) { content += `${divikey}${potentialFile}${diff}` }
        else { content += `${divikey}${potentialFile}` }

        fs.writeFileSync(filePath, content)

        return { success: true, filePath }
    })

    // Reads passwords folder for passwords to display
    ipcMain.handle('read-dir', async (event) => {    
        // Unrelated to rest of function, but utilised to generate data folder at startup (if not otherwise present)
        if (!fs.existsSync(__user)) {
            fs.mkdirSync(__user)
        }

        const folderPath = path.join(__user, 'passwords')
    
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath)
        }

        // Unrelated to rest of function, but utilised to generate exports folder at startup (if not otherwise present)
        const exportPath = path.join(__user, 'exports')
        if (!fs.existsSync(exportPath)) {
            fs.mkdirSync(exportPath)
        }
    
        var fileData = []

        const files = await fs.promises.readdir(folderPath)

        for (const file of files) {
            const toPath = path.join(folderPath, file)
            const contents = await fs.promises.readFile(toPath, 'utf-8')
            fileData.push(contents)
        }

        return fileData
    })

    // Retrieves a singular password
    ipcMain.handle('read-file-single', async (event, fileName) => {
        var filePathS = path.join(__user, 'passwords', `${fileName}.txt`)

        const fileS = await fs.promises.readFile(filePathS, 'utf-8')

        return [ filePathS, fileS ]
    })

    // Updates a password file's content
    ipcMain.handle('overwrite-file', (event, toFile, content) => {
        if (!toFile || !content) { return false }

        fs.writeFileSync(toFile, content)

        return true
    })

    // Deletes a password
    ipcMain.handle('delete-file', (event, toFile) => {
        if (!toFile) { return false }

        fs.unlinkSync(toFile, () => {})

        return true
    })

    // Opens web link from the about page (default browser)
    ipcMain.handle('open-link', (event, link) => {
        if (!link) { return false }

        shell.openExternal(link)

        return true
    })

    // Updates the settings file 
    ipcMain.handle('save-settings', (event, content, divikey) => {
        if (!content || !divikey) { return false }

        var filePath = path.join(__user, `settings.txt`)
        
        content += `${divikey}`

        fs.writeFileSync(filePath, content)

        return { success: true, filePath }
    })

    // Loads settings from file on reload/startup
    ipcMain.handle('load-settings', async (event) => {
        var filePath = path.join(__user, `settings.txt`)

        try {
            const file = await fs.promises.readFile(filePath, 'utf-8')

            return [ filePath, file ]
        }
        catch (missing) {
            var content = 'Trebuchet MS, sans-serif+{ngqy--HZN--ngqy}+grey+{ngqy--HZN--ngqy}++{ngqy--HZN--ngqy}+English' // Default hard-coded setting

            fs.writeFileSync(filePath, content)

            const file = await fs.promises.readFile(filePath, 'utf-8')
            
            return [ filePath, file ]
        }

    })

    // Packs password book into zip file
    ipcMain.handle('pack-zip', async (event, zipName) => {
        const zip = new zipper()

        const passwordFolder = path.join(__user, 'passwords')
        const settingsPath = path.join(__user, 'settings.txt')

        const settingsFileContent = fs.readFileSync(settingsPath, 'utf-8')
        zip.file(path.basename(settingsPath), settingsFileContent)

        const addFolderToZip = (folderPath, relativePath) => {
            zip.folder(relativePath)

            const files = fs.readdirSync(folderPath)

            files.forEach((file) => {
                const fullPath = path.join(folderPath, file)

                const relativeFilePath = path.join(relativePath, file)

                if (fs.statSync(fullPath).isDirectory()) {
                    addFolderToZip(fullPath, relativeFilePath)
                }
                else {
                    const fileContent = fs.readFileSync(fullPath)

                    zip.file(relativeFilePath, fileContent)
                }
            })
        }

        addFolderToZip(passwordFolder, 'passwords')

        return zip.generateAsync({ type: 'nodebuffer' }).then((content) => {
            const folderPath = path.join(__user, 'exports')

            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath)
            }

            const defaultName = 'booksafe_export'
            var zipNameFinal = zipName

            if (zipNameFinal == '') {
                zipNameFinal = defaultName
            }

            var zipPath = path.join(folderPath, `${zipNameFinal}.zip`)

            let diff = 1

            if (zipNameFinal == defaultName) {
                while (fs.existsSync(zipPath)) {
                    zipPath = path.join(folderPath, `${zipNameFinal}_${diff}.zip`)
                    diff++
                }
            }

            fs.writeFileSync(zipPath, content)

            return [zipPath, true]

        }).catch((err) => { return [err, false] })
    })

    // Unpacks password book from zip file
    ipcMain.handle('unpack-zip', async (event, zipPath) => {
        const destination_p = path.join(__user, 'passwords')
        const destination_s = path.join(__user, 'settings.txt')

        if (!fs.existsSync(destination_p)) {
            fs.mkdirSync(destination_p)
        }

        try {
            const zipData = fs.readFileSync(zipPath)
            const zip = await zipper.loadAsync(zipData)

            const setting_content = await zip.file('settings.txt').async('string')
            fs.writeFileSync(destination_s, setting_content, 'utf-8')

            const password_zip_folder = zip.folder('passwords')
            if (password_zip_folder) {
                const password_array = Object.keys(password_zip_folder.files).map((filename) => {
                    const file = password_zip_folder.files[filename]

                    return {
                        name: filename,
                        content: file && file._data && file._data.compressedContent ? file._data.compressedContent.toString('utf-8') : ''
                    }
                })
                return password_array
            }
        }
        catch (err) { return false }
    })

    // Opens a folder in native file explorer
    ipcMain.handle('open-folder', (event, folderName) => {
        const folderPath = path.join(__user, folderName)

        shell.openPath(folderPath)

        return true
    })

    // Clears all passwords from passwords folder
    ipcMain.handle('clear-files', (event) => {
        const directory = path.join(__user, `passwords`)
        const dirFiles = fs.readdirSync(directory)

        dirFiles.forEach((file) => {
            const filePath = path.join(directory, file)

            try {
                fs.unlinkSync(filePath)
            }
            catch (failed) { }
        })

        return true
    })

    // Opens file selection screen
    ipcMain.handle('dialog-box', (event, folder) => {
        if (folder == '') {
            return dialog.showOpenDialogSync({
                filters: [{ name: 'ZIP Files', extensions: ['zip'] }],
                properties: ['openFile']
            })
        }
        const folder_path = path.join(__user, folder)

        return dialog.showOpenDialogSync({
            defaultPath: folder_path,
            filters: [{ name: 'ZIP Files', extensions: ['zip'] }],
            properties: ['openFile']
        })
    })

    // Copies selected zip file to the exports folder
    ipcMain.handle('copy-zip', async (event, filepath) => {
        const destination = path.join(__user, 'exports')

        if (!fs.existsSync(destination)) {
            fs.mkdirSync(destination)
        }

        try {
            const data = await fs.promises.readFile(filepath)
            const importZip = await zipper.loadAsync(data)
    
            const newZip = new zipper()
    
            const promises = []
    
            importZip.forEach((relative_path, entry) => {
                promises.push(entry.async('nodebuffer').then((content) => { newZip.file(relative_path, content) }))
            })
    
            await Promise.all(promises)
    
            const new_content = await newZip.generateAsync({ type: 'nodebuffer' })
    
            const final_destination = path.join(destination, `${path.basename(filepath)}`)
    
            await fs.promises.writeFile(final_destination, new_content)
    
            return [true, null]
        }
        catch (err) { return [false, err] }
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    app.quit()
})