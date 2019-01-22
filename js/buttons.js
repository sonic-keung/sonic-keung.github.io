function getLineSeparator() {
	let br = document.createElement("BR");
	document.body.appendChild(br);
}

for (var i = 0; i < 26; i++) {
	let btn = document.createElement("BUTTON");
	btn.innerHTML = (i + 10).toString(36).toUpperCase() + " ";
	btn.style.listStyle = "none";
	btn.style.display = "inline";
	document.body.appendChild(btn);
	
	btn.onclick = function alphabetAlert(e) {
		alert(e.target.innerHTML);
	}
	
	if (i === 12) {
		getLineSeparator();
	}
}

