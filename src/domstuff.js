// okay so how do we build the board itself,
// the board and the backboard
// let us use grid, yep let us do that easy peasy
// yep that's it let's use a grid
// alright so now i have the cells
// i have the board setup
// what is remaining in game logic ?
// a lot of things are remaining
// for now let us do that
import { handleclick, Game, randomize } from "./index";
const container = document.querySelector(".container");

const randomizebtn = document.getElementById("randomizebtn");
randomizebtn.addEventListener("click", () => {
  maketheshipdissappear(Game.board1);
  randomize();
  maketheshipsappear(Game.board1);
});
function createcells() {
  const board = document.querySelector(".board");
  const backboard = document.querySelector(".backboard");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");
      div.id = `f${i}${j}`;
      div.className = "cell";
      board.appendChild(div);
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");
      div.id = `b${i}${j}`;
      div.className = "cell";
      backboard.appendChild(div);
    }
  }
}
function removeclicks() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.getElementById(`b${i}${j}`);
      cell.removeEventListener("click", handleclick);
    }
  }
}
function displayboard2() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (Game.board2.mat[i][j]) {
        let cell = document.getElementById(`b${i}${j}`);
        cell.classList.add("shipcell");
      }
    }
  }
}
function declarewinner(player) {
  const belowtheboard = document.querySelector(".belowtheboard");
  belowtheboard.innerText = `${[player]} has lost!!!`;
  displayboard2();
}

// let us now make the cells clickable
// alright so how should proceed ?
// i should go ahead and first of all let us make it
// playable,alright
function handleclickdom(type, pos, mat) {
  if (type == "b") {
    let cell = document.getElementById(`b${pos[0]}${pos[1]}`);
    // this is for the second board
    // here the clicks will be made by me the player1
    // this mat is of board2.mat
    if (mat[pos[0]][pos[1]] == -1) {
      cell.innerHTML = "&#128293";
    } else {
      cell.innerHTML = "&#9679";
    }
  } else {
    let cell = document.getElementById(`f${pos[0]}${pos[1]}`);
    // this is for the second board
    // here the clicks will be made by me the player1
    // this mat is of board2.mat
    if (mat[pos[0]][pos[1]] == -1) {
      cell.innerHTML = "&#128293";
    } else {
      cell.innerHTML = "&#9679";
    }
  }
}

function maketheshipdissappear(board) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (!board.mat[i][j]) continue;
      const cell = document.getElementById(`f${i}${j}`);
      cell.classList.remove("shipcell");
    }
  }
}
function maketheshipsappear(board) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (!board.mat[i][j]) continue;
      const cell = document.getElementById(`f${i}${j}`);
      cell.classList.add("shipcell");
    }
  }
}
export {
  createcells,
  maketheshipsappear,
  declarewinner,
  removeclicks,
  handleclickdom,
  displayboard2,
};
