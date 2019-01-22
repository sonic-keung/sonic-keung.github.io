
let questions = [
					{
						questionId: "1) What would be the output of this script?" + 
						   "<div>" + '<span style="color: #ff0000;">let</span>' + " mul = 2;" + "</div>" +
						   "<div>" + '<span style="color: #3366ff;">for</span>' + "(" + '<span style="color: #ff0000;"> let</span>' + " i = 3; i < 5; i++) {" +
						   "<div>" + "&nbsp; &nbsp;mul = mul * i;" + "</div>" +
						   "<div>" + "}" + "</div>" +
						   "<div>" + "&nbsp;" + "</div>" +
						   "<div>" +
						   "<div>" +
						   		"<div>" + '<span style="color: #3366ff;">console</span>' + ".log(mul);" + "</div>" +
						   "</div>" +
						   "</div>" +
						   "</div>", 
						formName:"form1", 
						radioName:"q1", 
						values:["a) 22", "b) 33", "c) 44", "d) 24"]
					}, 
					{
						questionId: "2) What would be the output of sum?" + 
							"<div>" + 
							"<div>" + '<span style="color: #ff0000;">var</span>' + " a = 2;" + "</div>" +
							"<div>" + '<span style="color: #ff0000;">var</span>' + " b = 3;" + "</div>" +
							"<div>" + '<span style="color: #ff0000;">var</span>' + " sum = a + b;" + "</div>" +
							"<div>" + "console.log(sum);" + "</div>" +
							"</div>", 
						formName:"form2", 
						radioName:"q2", 
						values:["a) 2", "b) 5", "c) 6", "d) 9"]
					},
					{
						questionId: "3) Javascript is a ____________ typed language.", 
						formName:"form3", 
						radioName:"q3", 
						values:["a) strongly", "b) weakly", "c) none", "d) both a and b"]
					},
					{
						questionId: "4) Which is NOT a type of function in Javascript?", 
						formName:"form4", 
						radioName:"q4", 
						values:["a) Named functions", "b) Anonymous functions", "c) Immediately invoked function expressions", "d) None of the above"]
					},
					{
						questionId: "5) " + '<span style="color: #ff0000;">var</span>' + " A and " + '<span style="color: #ff0000;">var</span>' + " a are two different variables.", 
						formName:"form5", 
						radioName:"q5", 
						values:["a) True", "b) False"]
					}
				];

function displayQuestions() {
  let numOfQuestions = prompt("How many questions? (1 to 5 only)");
  
if(numOfQuestions > 0 && numOfQuestions < 6) {
  for (let i = 0; i < numOfQuestions; i++) {
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
 } else {
	alert("Must be a number between 0 - 5")
	displayQuestions();
 }
}
