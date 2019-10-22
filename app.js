/*
Game function
- Player clicks buttons to mark with X or O
- Player to get 3 X or O in a row wins
- Notify player when they win
- Add score when a player wins
- Clear scores
*/

//UI elements
const resetBtn = document.querySelector("#resetBtn"),
  grid = document.querySelector("#grid");

// Alternate between button text
let buttonText = "O",
  turn = 0,
  game = 0;

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

//Reset
resetBtn.addEventListener("click", function() {
  location.reload();
  console.log("reset");
});
