const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')
const shell = require('electron').shell

function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 560,
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

    win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit() }
})