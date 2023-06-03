const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    savePass: (data) => ipcRenderer.invoke('create-file', data),
    loadFile: () => ipcRenderer.invoke('read-dir'),
    loadFileSingle: (fileName) => ipcRenderer.invoke('read-file-single', fileName),
    saveOver: (path, contents) => ipcRenderer.invoke('overwrite-file', path, contents),
    deleteFile: (path) => ipcRenderer.invoke('delete-file', path),
    openLink: (link) => ipcRenderer.invoke('open-link', link)
})