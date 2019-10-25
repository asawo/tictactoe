/*
Game function
- Player clicks buttons to mark with X or O ✅
- Player to get 3 X or O in a row wins ✅
- Handle ties ✅
- Notify player if they win ✅
- Add score when a player wins ✅
- Clear the grid and scores with a reset button  ✅
*/

//UI elements
const resetBtn = document.querySelector("#resetBtn"),
  grid = document.querySelector("#grid"),
  gridBtn = grid.querySelectorAll("div.rows > button"),
  cross = "<img src='src/cross.svg'></img>",
  circle = "<img src='src/circle.svg'</img>";

for (const button of gridBtn) {
  button.addEventListener("click", nextTurn);
}

let buttonText = circle,
  turn = 0,
  round = 0,
  scoreX = 0,
  scoreO = 0;

function nextTurn(e) {
  document.getElementById(e.target.id).innerHTML = buttonText;
  if (buttonText === circle) {
    buttonText = cross;
  } else {
    buttonText = circle;
  }
  document.getElementById(e.target.id).disabled = true;
  turn += 1;
  console.log(
    e.target.id + " played, turn " + turn + ", " + buttonText + "'s turn"
  );

  if (getWinner() === true) {
    for (const button of gridBtn) {
      button.disabled = true;
    }
    endRound();
  } else if (turn === 9 && getWinner() !== true) {
    round += 1;
    setTimeout(resetGrid, 1000);
  }
}

function endRound() {
  const winsX = document.getElementById("winsX"),
    winsO = document.getElementById("winsO"),
    tick = " <img src='src/check.svg'></img>";

  if (buttonText === circle) {
    buttonText = cross;
    scoreX += 1;
    winsX.insertAdjacentHTML("beforeend", tick);
  } else {
    buttonText = circle;
    scoreO += 1;
    winsO.insertAdjacentHTML("beforeend", tick);
  }
  round += 1;

  console.log(
    buttonText +
      " wins round " +
      round +
      ". Number of wins for X = " +
      scoreX +
      ", O = " +
      scoreO +
      ". Time for next round!"
  );

  openModal();
}

function resetGrid() {
  console.log(round + " start");
  turn = 0;

  for (const button of gridBtn) {
    button.innerHTML = "";
    button.disabled = false;
  }
  if (round % 2 !== 0) {
    buttonText = cross;
  } else {
    buttonText = circle;
  }
}

function getWinner() {
  const btn1 = document.querySelector("#btn1"),
    btn2 = document.querySelector("#btn2"),
    btn3 = document.querySelector("#btn3"),
    btn4 = document.querySelector("#btn4"),
    btn5 = document.querySelector("#btn5"),
    btn6 = document.querySelector("#btn6"),
    btn7 = document.querySelector("#btn7"),
    btn8 = document.querySelector("#btn8"),
    btn9 = document.querySelector("#btn9");

  if (
    btn1.innerHTML !== "" &&
    btn1.innerHTML == btn4.innerHTML &&
    btn1.innerHTML == btn7.innerHTML
  ) {
    return true;
  } else if (
    btn2.innerHTML !== "" &&
    btn2.innerHTML == btn5.innerHTML &&
    btn2.innerHTML == btn8.innerHTML
  ) {
    return true;
  } else if (
    btn3.innerHTML !== "" &&
    btn3.innerHTML == btn6.innerHTML &&
    btn3.innerHTML == btn9.innerHTML
  ) {
    return true;
  } else if (
    btn1.innerHTML !== "" &&
    btn1.innerHTML == btn2.innerHTML &&
    btn1.innerHTML == btn3.innerHTML
  ) {
    return true;
  } else if (
    btn4.innerHTML !== "" &&
    btn4.innerHTML == btn5.innerHTML &&
    btn4.innerHTML == btn6.innerHTML
  ) {
    return true;
  } else if (
    btn7.innerHTML !== "" &&
    btn7.innerHTML == btn8.innerHTML &&
    btn7.innerHTML == btn9.innerHTML
  ) {
    return true;
  } else if (
    btn1.innerHTML !== "" &&
    btn1.innerHTML == btn5.innerHTML &&
    btn1.innerHTML == btn9.innerHTML
  ) {
    return true;
  } else if (
    btn3.innerHTML !== "" &&
    btn3.innerHTML == btn5.innerHTML &&
    btn3.innerHTML == btn7.innerHTML
  ) {
    return true;
  }
}

//Reset
resetBtn.addEventListener("click", function() {
  location.reload();
  console.log("reset");
});

//Open modal at end of the round
const modal = document.querySelector("#modal"),
  closeBtn = document.querySelector("#closeBtn");

function openModal() {
  let modalPrompt = buttonText + "<br />Next round?<br />";

  modalText.innerHTML = modalPrompt;
  modal.style.display = "block";
}

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  resetGrid();
  console.log("close modal");
});
