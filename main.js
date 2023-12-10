const { app, BrowserWindow } = require('electron'); 

// CREATING MAIN WINDOW
var mainWindow;
async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
    });

    // USING await BECAUSE IT CAN TAKE SOME TIME TO RENDER THE FILE
    await mainWindow.loadFile('src/pages/editor/index.html');
}

// WHEN READY, THIS IS GOING TO CALL THE createWindow FUNCTION
app.whenReady().then(createWindow);

// IF THE USER IS USING macOS, THIS WILL FORCE THE WINDOW TO OPEN
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length == 0) {
        createWindow();
    }
})