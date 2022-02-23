const { BrowserWindow } = require('electron');
const { enable } = require('@electron/remote/main');
require('@electron/remote/main').initialize();


function createWindow() {
	let win = new BrowserWindow({
		width: 1000,
		height: 600,
		resizable: false,
		maximizable: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			
		}
	});

	win.loadFile("src/ui/html/index.html");
	enable(win.webContents);
}

module.exports = {
	createWindow
}

