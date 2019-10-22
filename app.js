/*
Game function
- Player clicks buttons to mark with X or O ✅
- Player to get 3 X or O in a row wins ✅
- Notify player when they win
- Add score when a player wins
- Clear the grid and scores with a reset button  ✅
*/

//UI elements
const resetBtn = document.querySelector("#resetBtn"),
  grid = document.querySelector("#grid"),
  gridBtn = grid.querySelectorAll("div.rows > button");

for (const button of gridBtn) {
  button.addEventListener("click", move);
}

let buttonText = "O",
  turn = 0,
  game = 1;

function move(e) {
  document.getElementById(e.target.id).innerHTML = buttonText;
  if (buttonText === "O") {
    buttonText = "X";
  } else {
    buttonText = "O";
  }
  document.getElementById(e.target.id).disabled = true;
  turn += 1;
  console.log(
    e.target.id + " played, move " + turn + ", " + buttonText + "'s turn"
  );

  if (getWinner() === true) {
    for (const button of gridBtn) {
      button.disabled = true;
    }
    game += 1;
    nextRound();
  }
}

function nextRound() {
  alert("Nice, you've won. Time for next round");
  console.log("hello winner");
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
    console.log(
      btn1.innerHTML + " wins game " + game + ". Time for next round!"
    );
    return true;
  } else if (
    btn2.innerHTML !== "" &&
    btn2.innerHTML == btn5.innerHTML &&
    btn2.innerHTML == btn8.innerHTML
  ) {
    console.log(
      btn2.innerHTML + " wins game " + game + ". Time for next round!"
    );
    return true;
  } else if (
    btn3.innerHTML !== "" &&
    btn3.innerHTML == btn6.innerHTML &&
    btn3.innerHTML == btn9.innerHTML
  ) {
    console.log(
      btn3.innerHTML + " wins game " + game + ". Time for next round!"
    );
    return true;
  } else if (
    btn1.innerHTML !== "" &&
    btn1.innerHTML == btn2.innerHTML &&
    btn1.innerHTML == btn3.innerHTML
  ) {
    console.log(
      btn1.innerHTML + " wins game " + game + ". Time for next round!"
    );
    return true;
  } else if (
    btn4.innerHTML !== "" &&
    btn4.innerHTML == btn5.innerHTML &&
    btn4.innerHTML == btn6.innerHTML
  ) {
    console.log(
      btn4.innerHTML + " wins game " + game + ". Time for next round!"
    );
    return true;
  } else if (
    btn7.innerHTML !== "" &&
    btn7.innerHTML == btn8.innerHTML &&
    btn7.innerHTML == btn9.innerHTML
  ) {
    console.log(
      btn7.innerHTML + " wins game " + game + ". Time for next round!"
    );
    return true;
  } else if (
    btn1.innerHTML !== "" &&
    btn1.innerHTML == btn5.innerHTML &&
    btn1.innerHTML == btn9.innerHTML
  ) {
    console.log(
      btn1.innerHTML + " wins game " + game + ". Time for next round!"
    );
    return true;
  } else if (
    btn3.innerHTML !== "" &&
    btn3.innerHTML == btn5.innerHTML &&
    btn3.innerHTML == btn7.innerHTML
  ) {
    console.log(
      btn3.innerHTML + " wins game " + game + ". Time for next round!"
    );
    return true;
  }
}

//Reset
resetBtn.addEventListener("click", function() {
  location.reload();
  console.log("reset");
});
