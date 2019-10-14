/*
Game function
- Player clicks buttons to mark with X or O
- Player to get 3 X or O in a row wins
- Notify player when they win
- Add score when a player wins
- Clear scores
*/

//UI elements
const btn1 = document.querySelector("#btn1"),
  btn2 = document.querySelector("#btn2"),
  btn3 = document.querySelector("#btn3"),
  btn4 = document.querySelector("#btn4"),
  btn5 = document.querySelector("#btn5"),
  btn6 = document.querySelector("#btn6"),
  btn7 = document.querySelector("#btn7"),
  btn8 = document.querySelector("#btn8"),
  btn9 = document.querySelector("#btn9"),
  resetBtn = document.querySelector("#resetBtn");

// Alternate between button text
let buttonText = "O",
  turn = 0,
  game = 0;

//Listen for click
btn1.addEventListener("click", function() {
  document.querySelector("#btn1").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 1 pushed, turn " + turn);
});
btn2.addEventListener("click", function() {
  document.querySelector("#btn2").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 2 pushed, turn " + turn);
});
btn3.addEventListener("click", function() {
  document.querySelector("#btn3").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 3 pushed, turn " + turn);
});
btn4.addEventListener("click", function() {
  document.querySelector("#btn4").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 4 pushed, turn " + turn);
});
btn5.addEventListener("click", function() {
  document.querySelector("#btn5").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 5 pushed, turn " + turn);
});
btn6.addEventListener("click", function() {
  document.querySelector("#btn6").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 6 pushed, turn " + turn);
});
btn7.addEventListener("click", function() {
  document.querySelector("#btn7").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 7 pushed, turn " + turn);
});
btn8.addEventListener("click", function() {
  document.querySelector("#btn8").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 8 pushed, turn " + turn);
});
btn9.addEventListener("click", function() {
  document.querySelector("#btn9").innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  this.disabled = true;
  turn += 1;
  console.log("button 9 pushed, turn " + turn);
});

//reset
resetBtn.addEventListener("click", function() {
  location.reload();
  console.log("reset");
});
