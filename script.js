let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn0 = true; // true for player 1, false for player 2
const win_patterns = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal \
  [2, 4, 6], // Diagonal /
];

const resetGame = () => {
  turn0 = true;
  EnableBoxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const EnableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = ""; // Clear the text in the boxes
  }
};

const showWinner = (winner) => {
  msgcontainer.innerText = `Congratulations!  Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const checkwinner = () => {
  for (let pattern of win_patterns) {
    let post1val = boxes[pattern[0]].innerText;
    let post2val = boxes[pattern[1]].innerText;
    let post3val = boxes[pattern[2]].innerText;
    if (post1val === post2val && post2val === post3val && post1val !== "") {
      showWinner(post1val);
    }
  }
};

newgamebtn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);
