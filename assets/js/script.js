document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit!");
      } else {
        let gameType = (this.getAttribute("data-type"));
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

function runGame(){
     // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function caculateCorrectAnswer(){

}

function incrementScote() {

}
 function incrementWrongAnswer() {

 }

 function displayAdditionQuestion() {

 }

 function displaySubstractQuestion() {

 }
 function displayMultiplygQuestion() {

 }