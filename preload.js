const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    savePass: (sit, content, divikey) => ipcRenderer.invoke('create-file', sit, content, divikey),
    loadFile: () => ipcRenderer.invoke('read-dir'),
    loadFileSingle: (fileName) => ipcRenderer.invoke('read-file-single', fileName),
    saveOver: (path, contents) => ipcRenderer.invoke('overwrite-file', path, contents),
    deleteFile: (path) => ipcRenderer.invoke('delete-file', path),
    openLink: (link) => ipcRenderer.invoke('open-link', link),
    saveSettings: (content, divikey) => ipcRenderer.invoke('save-settings', content, divikey),
    loadSettings: () => ipcRenderer.invoke('load-settings'),
    packZip: (zipName) => ipcRenderer.invoke('pack-zip', zipName),
    unpackZip: (zipPath) => ipcRenderer.invoke('unpack-zip', zipPath),
    openExplorer: (folderName) => ipcRenderer.invoke('open-folder', folderName),
    clearFiles: () => ipcRenderer.invoke('clear-files'),
    showDialog: (folder) => ipcRenderer.invoke('dialog-box', folder),
    copyZip: (filepath) => ipcRenderer.invoke('copy-zip', filepath)
})