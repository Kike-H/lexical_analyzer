const { BrowserWindow } = require('electron');

function createWindow() {
	let win = new BrowserWindow({
		width: 1000,
		height: 600,
		resizable: false,
		maximizable: false,
		titleBarStyle: "hiddenInset",
		frame: false,
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.loadFile("src/ui/html/index.html");
}

module.exports = {
	createWindow
}

