var questions = [
					{
						questionId: "1) What is " + '<b>this</b>' + " keyword in Javascript?", 
						formName:"form1", 
						radioName:"q1", 
						values:["a) It refers to the object it belongs to", "b) a word", "c) this", "d) None of the above"]
					}, 
					{
						questionId: "2)  What is " + '<b>this</b>' + " in a Method in Javascript?", 
						formName:"form2", 
						radioName:"q2", 
						values:["a) refers to the owner of the method", "b) global object", "c) undefined", "d) element"]
					},
					{
						questionId: "3)  What is " + '<b>this</b>' + " Alone in Javascript?", 
						formName:"form3", 
						radioName:"q3", 
						values:["a)function ", "b) global object", "c) none", "d) both a and b"]
					},
					{
						questionId: "4)  What is " + '<b>this</b>' + " in a function in Javascript?", 
						formName:"form4", 
						radioName:"q4", 
						values:["a) a function", "b) global object [object window]", "c) Immediately invoked function expressions", "d) None of the above"]
					},
					{
						questionId: "5)  What is " + '<b>this</b>' + " in Event Handlers in Javascript?", 
						formName:"form5", 
						radioName:"q5", 
						values:["a) Refers to the HTML element that received the event", "b) Nothing", "c) A event handler", "d) 4"]
					},
					{
						questionId: "6) The browser is an ___________, and the document it displays is an __________ too.", 
						formName:"form5", 
						radioName:"q5", 
						values:["a) object, object", "b) object, inner object", "c) function, snicker bar", "d) None of the above"]
					},
					{
						questionId: "7) Everything that happens in the browser is registered as an __________", 
						formName:"form5", 
						radioName:"q5", 
						values:["a) object", "b) function", "c) event", "d) a and b"]
					},
					{
						questionId: "8) Get attribute returns the value of the ___________ attribute. ", 
						formName:"form5", 
						radioName:"q5", 
						values:["a) non-specified", "b) a word", "c) specified", "d) None of the above"]
					},
					{
						questionId: "9) What is the output of i?" +"<div>" + '<span style="color: #3366ff;">for</span>' + "(" + '<span style="color: #ff0000;"> let</span>' + " i = 0; i < 5; i++) {" +
						   "<div>" + "&nbsp; &nbsp;console.log(i);" + "</div>" +
						   "<div>" + "}" + "</div>" +
						   "<div>" + "&nbsp;" + "</div>" +
						   "<div>" +
						   "<div>" +
						   "</div>" +
						   "</div>" +
						   "</div>", 
						formName:"form5", 
						radioName:"q5", 
						values:["a) 0 1 2 3 4 ", "b) 1 2 3 4 5", "c) 0 1 2 3 4 5", "d) None of the above"]
					},
					{
						questionId: "10) How do you get all elements matching specified selector(s)?" ,
						formName:"form5", 
						radioName:"q5", 
						values:["a) document.querySelectorAll", "b) document.querySelectorAll", "c) document.getElementById", "d) None of the above"]
					}
				];
				
				
for (let i = 0; i < 10; i++) {
	let thisQuestion = questions[i];	  
	let theValues = thisQuestion.values;
	let theInput;
	let label = document.createElement("label");
	let theForm = document.createElement("form");
	
	theForm.setAttribute('name', thisQuestion.formName);
		
	for (let j = 0; j < theValues.length; j++) { 
		theInput = document.createElement("input");
		theInput.setAttribute('type', "radio");
		theInput.setAttribute('name', thisQuestion.radioName);
		theInput.setAttribute('value', theValues[j]);
		
		
		console.log(thisQuestion);
		
		label.appendChild(theInput);
		label.innerHTML += "<span>" + theValues[j] + "</span><br/>";
		theForm.appendChild(label);
	}
	
	document.body.innerHTML += thisQuestion.questionId;
	document.body.appendChild(theForm);
}

