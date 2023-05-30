const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        icon: __dirname + '/src/lockicon.ico',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    ipcMain.handle('create-file', (req, data) => {
        if (!data || !data.sit || !data.content) { return false }

        var filePath = path.join(__dirname, 'passwords', `${data.sit}.txt`)

        if (fs.existsSync(filePath)) {
            var diff = 0
            while (fs.existsSync(filePath)) {
                diff++
                filePath = path.join(__dirname, 'passwords', `${data.sit}${diff}.txt`)
            }
        }

        fs.writeFileSync(filePath, data.content)

        return { success: true, filePath }
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit() }
})