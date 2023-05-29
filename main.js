const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    ipcMain.handle('create-file', (req, data) => {
        if (!data || !data.sit || !data.content) { return false }

        const filePath = path.join(__dirname, 'passwords', `${data.sit}.txt`)
        fs.writeFileSync(filePath, data.content)

        return { success: true, filePath }
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit() }
})