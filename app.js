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
  resetBtn = document.querySelector("#resetBtn"),
  grid = document.querySelector("#grid");

// Alternate between button text
let buttonText = "O",
  turn = 0,
  game = 0;

//Listen for click
function move(e) {
  document.getElementById(e.target.id).innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  document.getElementById(e.target.id).disabled = true;
  turn += 1;
  console.log(e.target.id + " pushed, turn " + turn);
}

grid.addEventListener("click", move);

//look up event listener event object (e) to differentiate between the different clicks

//Reset
resetBtn.addEventListener("click", function() {
  location.reload();
  console.log("reset");
});
