function retrieveQuiz() {
	// Retrieve json
	let retrievedObject = localStorage.getItem('storeToJson');
	let parsedObject = JSON.parse(retrievedObject);
			
	if (parsedObject === null) {
		alert("Error");
	} else {
		return parsedObject;
	}
}

function displayQuestions() {
	const mcOption = 4;
	
	for (let i = 0; i < retrieveQuiz().length; i++) {
		let theForm = document.createElement("form");
		let theValues = retrieveQuiz().Choices;
		let theInput;
		let label = document.createElement("label");
		label.setAttribute('id', 'question');
		label.value = retrieveQuiz()[i].Question;
		
		label.innerHTML += "<br />";
		theForm.setAttribute('id', 'myQuestion');
		label.innerHTML += label.value + "<br/>";
		theForm.appendChild(label);
		  
		for (let j = 0; j < mcOption; j++) { 
			// create radio
			theInput = document.createElement("input");
			theInput.setAttribute('type', "radio");
			theInput.setAttribute('name', i);
			theInput.setAttribute('id', "radio"+ i + j);
			
			let a = document.createElement("label");
			a.innerHTML += retrieveQuiz()[i].Choices[j] + "<br/>";
			a.setAttribute('id', "choice" + i + j);
				
			label.appendChild(theInput);	
			label.appendChild(a);
			label.innerHTML += "<br />";
			theForm.appendChild(label);
		}
		document.getElementById("displayQuestions").appendChild(theForm);
	}
}

function validate() {
	let score = 0;
	const quizLength = 4;
	
	for (let i = 0; i < retrieveQuiz().length; i++) {
		for (let j = 0; j < quizLength; j++) {
			if(retrieveQuiz()[i].Answer == j) {
				let answer = document.getElementById('choice' + i + j);
				let highlight = document.createElement('span');
				highlight.setAttribute('class', "marker");
				highlight.innerHTML = answer.innerHTML;

				answer.innerHTML = "";
				answer.appendChild(highlight);
			}
		}
	}

	for (let l = 0; l < correctAnswer().length; l++) {
		let check = document.getElementsByName(l);
		if (check[correctAnswer()[l]].checked) {
			score++;
		}
	}
	
	alert("You answered: " + score + "/" + correctAnswer().length + " correctly");
}

function correctAnswer() {
	let key = [];
	for (let m = 0; m < retrieveQuiz().length; m++) {
		key.push(retrieveQuiz()[m].Answer);
	}
	return key;
}

displayQuestions();
