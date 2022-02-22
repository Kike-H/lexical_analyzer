const { app } = require('@electron/remote');

document.getElementById('btn-close').addEventListener('click', () => {
	app.quit();
});
