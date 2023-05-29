const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    title: "BookSafe",
    savePass: (data) => ipcRenderer.invoke('create-file', data)
})