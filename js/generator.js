let storeToJson = [];
let index = 0; // number of questions added or deleted
let rowIndex, table = document.getElementById("table");

function addQuiz() {
	
	if (!isEmpty()) {
		const mcOptions = 4;
		let answer; // store answer to checked radio
		let questions =  document.getElementById("question").value;
		let radios = document.getElementsByName("mc");
		let parseData = {};
		let radioChoice = [];
		
		/* 
		loop through radios and checks if one is selected
		and assigns answer to the checked radio.
		*/
		for (let i = 0; i < mcOptions; i++) {
			radioChoice[i] = document.getElementById("answer" + i).value;
			if (radios[i].type === 'radio' && radios[i].checked) {
				answer = i;
				console.log(answer);
			} 
		}
	
		parseData.QuestionNum = index; // store question id
		parseData.Question = questions; // store question 
		parseData.Choices = radioChoice; // store radio choices
		parseData.Answer = answer; // store correct answer
		
		storeToJson.push(parseData);
		index++;
		console.log(storeToJson);
		addToTable();
	}
	let clearInput = document.getElementById("myForm");
	clearInput.reset();
}

function addToTable() {
	if(!isEmpty()) {
		let newRow = table.insertRow(table.length), 
		cell1 = newRow.insertCell(0),
		cell2 = newRow.insertCell(1),
		cell3 = newRow.insertCell(2),
		cell4 = newRow.insertCell(3),
		cell5 = newRow.insertCell(4),
		question = document.getElementById("question").value,
		answer1 = document.getElementById("answer0").value,
		answer2 = document.getElementById("answer1").value,
		answer3 = document.getElementById("answer2").value,
		answer4 = document.getElementById("answer3").value;
		
		cell1.innerHTML = question;
		cell2.innerHTML = answer1;
		cell3.innerHTML = answer2;
		cell4.innerHTML = answer3;
		cell5.innerHTML = answer4;
	
		selectRow();
	}
}

function selectRow() {
	for (let i = 1; i < table.rows.length;  i++) {
		table.rows[i].onclick = function() {
			rowIndex = this.rowIndex;
			document.getElementById("question").value = this.cells[0].innerHTML;
			document.getElementById("answer0").value = this.cells[1].innerHTML;
			document.getElementById("answer1").value = this.cells[2].innerHTML;
			document.getElementById("answer2").value = this.cells[3].innerHTML;
			document.getElementById("answer3").value = this.cells[4].innerHTML;
		};
	}
}
selectRow();

function isEmpty() {
	let isEmpty = false, 
	question = document.getElementById("question").value,
	q1 = document.getElementById("answer0").value,
	q2 = document.getElementById("answer1").value,
	q3 = document.getElementById("answer2").value,
	q4 = document.getElementById("answer3").value;
	let radios = document.getElementsByName("mc");
	
	if (question === "") {
		alert("Question cannot be empty");
		isEmpty = true;
	} else if (q1 === "") {
		alert("Input 1 cannot be empty");
		isEmpty = true;
	} else if (q2 === "") {
		alert("Input 2 cannot be empty");
		isEmpty = true;
	} else if (q3 === "") {
		alert("Input 3 cannot be empty");
		isEmpty = true;
	} else if (q4 === "") {
		alert("Input 4 cannot be empty");
		isEmpty = true;
	}
	
	return isEmpty;
}

function editQuestion() {
	let question = document.getElementById("question").value,
	q1 = document.getElementById("answer0").value,
	q2 = document.getElementById("answer1").value,
	q3 = document.getElementById("answer2").value,
	q4 = document.getElementById("answer3").value;

	if (!isEmpty()) {
		table.rows[rowIndex].cells[0].innerHTML = question;
		table.rows[rowIndex].cells[1].innerHTML = q1;
		table.rows[rowIndex].cells[2].innerHTML = q2;
		table.rows[rowIndex].cells[3].innerHTML = q3;
		table.rows[rowIndex].cells[4].innerHTML = q4;		
	}
	console.log(storeToJson);
	let clearInput = document.getElementById("myForm");
	clearInput.reset();
}

function deleteQuestion() {
	table.deleteRow(rowIndex);
	storeToJson.splice(rowIndex, 1);
	document.getElementById("question").value = "";
	document.getElementById("answer0").value = "";
	document.getElementById("answer1").value = "";
	document.getElementById("answer2").value = "";
	document.getElementById("answer3").value = "";

	alert("Question removed");
}

function storeQuiz() {
	localStorage.setItem('storeToJson', JSON.stringify(storeToJson));
	alert("Quiz saved to local storage");
}


function clearStorage() {
	localStorage.clear();
	alert("Local storage cleared");
}
