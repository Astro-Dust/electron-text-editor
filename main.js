const { app, BrowserWindow } = require('electron'); 

// CREATING MAIN WINDOW
var mainWindow;
async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
    });

    await mainWindow.loadFile('src/pages/editor/index.html');
}

// WHEN READY, THIS IS GOING TO CALL THE createWindow FUNCTION
app.whenReady().then(createWindow);