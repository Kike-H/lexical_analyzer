let view = document.getElementById('view');

document.getElementById('btn-s').addEventListener('click', () => {
	let path = document.getElementById('pathfile').value;
	fs.readFile(path, 'utf-8', (err, data) => {
		if(err) {
			alert('An error ocurred reading the file: '+ path)
		}
		analyze(data);
	});
});

function analyze(data) {
	let result = "";
	let expresion = data.split(/(\s+)|([(])|([)])|([;])|[.]/)
	for(let key in expresion) {
		let word = expresion[key];
		if(/^[0-9]/.test(word)) {
			result = result+word+" is a number\n"
		}
		else if(/([+]|[*]|[/]|[-]|[=])/.test(word)) {
			result = result+word+" is a mathematical symbol\n"
		}
		else if(/(boolean|byte|char|short|int|long|float|double|String)/.test(word)) {
			result = result+`${word} is identifier\n`;
		}
		else if(/([(]|[{]|[[])/.test(word)) {
			result = result+`${word} is a opening symbol\n`;
		}
		else if(/([)]|[}]|[;])/.test(word)) {
			result = result+`${word} is a close symbol\n`;
		}
		else if(/(abstract|assert|for|while|if|true|false|void|switch|import|new|private|public|protected|System|println)/.test(word)) {
			result = result+word+" is a reserved word\n"
		}
	}
	view.value = result;
}

