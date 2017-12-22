'use strict';
const electron = require('electron');

const app = electron.app;

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    const win = new electron.BrowserWindow({ width, height })
    const server = require("./server")(function(port) {
        win.loadURL('http://localhost:' + port);
        win.on('closed', onClosed);
        console.log('Desktop app started on port :', port);
    });

    return win;
}


app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
