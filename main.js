const { app, BrowserWindow, ipcMain, shell, dialog } = require('electron')
const path = require('path')
const fs = require('fs')
const zipper = require('jszip')

function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 570,
        minHeight: 350,
        autoHideMenuBar: true,
        icon: __dirname + '/src/lockicon.ico',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    ipcMain.handle('create-file', (event, sit, content, divikey) => {
        if (!sit || !content || !divikey) { return false }

        const potentialFile = sit.replace(/[^a-zA-Z0-9]/g,'_')

        var filePath = path.join(__dirname, 'passwords', `${potentialFile}.txt`)

        var diff = 0

        if (fs.existsSync(filePath)) {
            while (fs.existsSync(filePath)) {
                diff++
                filePath = path.join(__dirname, 'passwords', `${potentialFile}${diff}.txt`)
            }
        }

        if (diff > 0) { content += `${divikey}${potentialFile}${diff}` }
        else { content += `${divikey}${potentialFile}` }

        fs.writeFileSync(filePath, content)

        return { success: true, filePath }
    })

    ipcMain.handle('read-dir', async (event) => {
        const folderPath = path.join(__dirname, 'passwords')
    
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath)
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

    ipcMain.handle('read-file-single', async (event, fileName) => {
        var filePathS = path.join(__dirname, 'passwords', `${fileName}.txt`)

        const fileS = await fs.promises.readFile(filePathS, 'utf-8')

        return [ filePathS, fileS ]
    })

    ipcMain.handle('overwrite-file', (event, toFile, content) => {
        if (!toFile || !content) { return false }

        fs.writeFileSync(toFile, content)

        return true
    })

    ipcMain.handle('delete-file', (event, toFile) => {
        if (!toFile) { return false }

        fs.unlinkSync(toFile, () => {})

        return true
    })

    ipcMain.handle('open-link', (event, link) => {
        if (!link) { return false }

        shell.openExternal(link)

        return true
    })

    ipcMain.handle('save-settings', (event, content, divikey) => {
        if (!content || !divikey) { return false }

        var filePath = path.join(__dirname, `settings.txt`)
        
        content += `${divikey}`

        fs.writeFileSync(filePath, content)

        return { success: true, filePath }
    })

    ipcMain.handle('load-settings', async (event) => {
        var filePath = path.join(__dirname, `settings.txt`)

        try {
            const file = await fs.promises.readFile(filePath, 'utf-8')

            return [ filePath, file ]
        }
        catch (missing) {
            var content = 'Trebuchet MS, sans-serif+{ngqy--HZN--ngqy}+grey+{ngqy--HZN--ngqy}+' // Default hard-coded setting

            fs.writeFileSync(filePath, content)

            const file = await fs.promises.readFile(filePath, 'utf-8')
            
            return [ filePath, file ]
        }

    })

    ipcMain.handle('pack-zip', async (event, zipName) => {
        const zip = new zipper()

        const passwordFolder = path.join(__dirname, 'passwords')
        const settingsPath = path.join(__dirname, 'settings.txt')

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
            const folderPath = path.join(__dirname, 'exports')

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

    ipcMain.handle('unpack-zip', async (event, zipPath) => {
        const destination_p = path.join(__dirname, 'passwords')
        const destination_s = path.join(__dirname, 'settings.txt')

        if (!fs.existsSync(destination_p)) {
            fs.mkdirSync(destination_p)
        }

        try {
            const zipData = fs.readFileSync(zipPath)
            const zip = await zipper.loadAsync(zipData)

            const setting_content = await zip.file('settings.txt').async('string')
            fs.writeFileSync(destination_s, setting_content, 'utf-8')
            console.log(setting_content)

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

    ipcMain.handle('open-folder', (event, folderName) => {
        const folderPath = path.join(__dirname, folderName)

        shell.openPath(folderPath)

        return true
    })

    ipcMain.handle('clear-files', (event) => {
        const directory = path.join(__dirname, `passwords`)
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

    ipcMain.handle('dialog-box', (event, folder) => {
        if (folder == '') {
            return dialog.showOpenDialogSync({
                filters: [{ name: 'ZIP Files', extensions: ['zip'] }],
                properties: ['openFile']
            })
        }
        const folder_path = path.join(__dirname, folder)

        return dialog.showOpenDialogSync({
            defaultPath: folder_path,
            filters: [{ name: 'ZIP Files', extensions: ['zip'] }],
            properties: ['openFile']
        })
    })

    ipcMain.handle('copy-zip', async (event, filepath) => {
        const destination = path.join(__dirname, 'exports')

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
    if (process.platform !== 'darwin') { app.quit() }
})