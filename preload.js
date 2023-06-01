const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    savePass: (data) => ipcRenderer.invoke('create-file', data),
    loadFile: () => ipcRenderer.invoke('read-dir'),
    loadFileSingle: (fileName) => ipcRenderer.invoke('read-file-single', fileName)
})