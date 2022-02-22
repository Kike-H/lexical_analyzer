const { dialog } = require('@electron/remote');
const fs = require('fs');

document.getElementById('btn-path-file').addEventListener('click', async () => {
	const file_path = (await dialog.showOpenDialog()).filePaths[0];
	document.getElementById("pathfile").value = file_path;
})

document.getElementById('btn-output-directory').addEventListener('click', async () => {
	const filename =  (await dialog.showSaveDialog()).filePath;
	const value = document.getElementById('view').value;
	if(filename) {
		fs.writeFile(filename, value, (err) => {
			if(err){
				alert("An error ocurred writting the file: "+filename);
			}
			alert("Results exported successfully");
		})
	}
})

