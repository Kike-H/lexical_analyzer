const { shell } = require('@electron/remote');

document.getElementById('btn-info').addEventListener('click', () => {
	shell.openExternal('https://github.com/Kike10hd/lexical_analyzer.git')
})
