const { app, BrowserWindow, nativeImage, remote } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    backgroundMaterial: "none",
    icon: "assets\\icon.ico",
    width: 800,
    height: 600,
    // frame: false,
    autoHideMenuBar: true,
    resizable: false,
    // opacity:90
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