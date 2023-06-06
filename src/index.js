import {
  createcells,
  maketheshipsappear,
  declarewinner,
  removeclicks,
  handleclickdom,
  displayboard2,
} from "./domstuff";
import { compplay } from "./computer";
createcells();

const Ship = (length, spread) => {
  let damage = 0;
  let pos;
  return { length, damage, spread, pos };
};
const shallowCopy = (matrix) => matrix.map((row) => [...row]);

// player what does a player do
// player plays
// he simply chooses a cell that's all what he does
// he simply chooses  a cell
//there is going to be two players in this game
// the user should have option to play against the computer or random anon
// let us first build the harder version where the two real players play
// let us not yet kthink about separating them, let us keep it so that
// both players can see each others boards, for now and thenm later i can hide them simply
// so for now what i have to do, is i need two boards with random placement of ships
// alright, let us think of the boards as two 10*10 matrices because it feels right
// alright, next what i have to do is that , how do i do the random placement of ships
// so i have the ship objects for now, what i will do is just simply place them
// both boards will have the same ships as to not give unfair advantage
// same ships just their position would be different
// so now i have the ships and i also have a placetheship function let us define the board
// let us keep the two boards global not a big problem ,later can handle it maybe
// let us Board will have its own grid and its' shiplist yep
// let us make the ships appear on the board now alright,

function randomize() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      Game.board1.mat[i][j] = 0;
    }
  }
  Game.board1.shiplist = [];
  buildtheships(Game.board1.shiplist);
  for (let ship of Game.board1.shiplist) {
    placeTheship(ship, Game.board1.mat);
  }
}
function turnchange() {
  if (Game.turn == 1) {
    Game.turn = 2;
    // removeclicks();
    let compchoice = compplay(Game.board1b);
    handleclick(Game.board1, compchoice);
  } else {
    Game.turn = 1;
    // Gameplay.addclick();
  }
}
function handlewin(player) {
  removeclicks();
  declarewinner(player);
}
function handleclick(board, pos) {
  if (board.mat[pos[0]][pos[1]] == 1) {
    board.mat[pos[0]][pos[1]] = -1;
    if (board.player == "Player1") {
      handleclickdom("f", pos, board.mat);
    } else {
      handleclickdom("b", pos, board.mat);
    }
    board.damage += 1;
    if (board.damage == 20) handlewin(board.player);
    if (board.player == "Player1") {
      Game.turn = 1;
      turnchange();
    }
  } else if (board.mat[pos[0]][pos[1]] == 0) {
    if (board.player == "Player1") {
      handleclickdom("f", pos, board.mat);
    } else {
      handleclickdom("b", pos, board.mat);
    }
    // do something
    turnchange();
  } else {
    //do nothing
  }
}
const Board = () => {
  const mat = [];
  for (let i = 0; i < 10; i++) {
    let temp = [];
    for (let j = 0; j < 10; j++) temp.push(0);
    mat.push(temp);
  }
  const matback = [];
  for (let i = 0; i < 10; i++) {
    let temp = [];
    for (let j = 0; j < 10; j++) temp.push(0);
    mat.push(temp);
  }
  const shiplist = [];
  let damage = 0;
  let player;
  return { mat, shiplist, damage, player };
};
function buildtheships(shiplist) {
  const lengths = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  const spreads = ["vertical", "horizontal"];
  for (const l of lengths) {
    const ship = Ship(l, spreads[Math.floor(Math.random() * 2)]);
    shiplist.push(ship);
  }
}
function placeTheship(ship, board) {
  // board is a 10*10 matrix with some filled with 1' and 0's
  // 1's is where ships are placed
  // for now let us just hard code the ships it'll be better later i can think of randomizing that as well
  // choose randomly among all possible positions
  const possible_pos = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // determing if this can be a position
      // let us check if space is available
      let f = 0;
      let f_ = 0;
      for (let i_ = i; i_ < i + ship.length && i_ < 10; i_++)
        if (board[i_][j] == 1) f = 1;
      for (let j_ = j; j_ < j + ship.length && j_ < 10; j_++)
        if (board[i][j_] == 1) f_ = 1;
      if (ship.spread == "vertical") {
        if (i + ship.length - 1 < 10 && f == 0) possible_pos.push([i, j]);
      } else {
        if (j + ship.length - 1 < 10 && f_ == 0) possible_pos.push([i, j]);
      }
    }
  }
  let choice = possible_pos[Math.floor(Math.random() * possible_pos.length)];
  if (ship.spread == "vertical") {
    for (let i = choice[0]; i < choice[0] + ship.length; i++) {
      board[i][choice[1]] = 1;
      // console.log(i, choice[1]);
    }
  } else {
    for (let j = choice[1]; j < choice[1] + ship.length; j++) {
      board[choice[0]][j] = 1;
      // console.log(choice[0], j);
    }
  }
}

function printmat(mat) {
  for (let i = 0; i < 10; i++) {
    console.log(mat[i]);
  }
}

const Game = (() => {
  let player1 = "Player1";
  let player2 = "Player2";
  let winner;
  let board1;
  let board1b = Board();
  let board2;
  let board2b;
  let turn = 1;
  board1 = Board();
  board2 = Board();
  board1.player = player1;
  board2.player = player2;
  buildtheships(board1.shiplist);
  for (let ship of board1.shiplist) {
    placeTheship(ship, board1.mat);
  }
  maketheshipsappear(board1);
  buildtheships(board2.shiplist);
  for (let ship of board2.shiplist) {
    placeTheship(ship, board2.mat);
  }
  return { player1, player2, board1, board2, board1b, board2b, turn };

  // now let us play
  // only the board2b should be clickable,alright
  // let us do that,right now
})();
const Gameplay = (() => {
  function addclick() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.getElementById(`b${i}${j}`);
        cell.addEventListener("click", () => {
          handleclick(Game.board2, [i, j]);
        });
      }
    }
  }
  addclick();
  return { addclick };
})();
export { handleclick, Game, randomize };
// so now the ships are appearing, now what do i do,
// i also want them to be placed on the other players board yep, in need to do that as well
// let us for now make the computer play
