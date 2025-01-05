const { app, BrowserWindow, nativeImage } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    icon: "assets\\icon.ico",
    width: 800,
    height: 600,
    frame: false,
    backgroundMaterial: "acrylic",
    backgroundColor: "rgba(0, 0, 0, 0.50)"
  })

  win.setOverlayIcon(nativeImage.createFromPath('assets\\icon.ico'), 'Moew Player')

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})