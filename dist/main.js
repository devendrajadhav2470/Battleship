/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compplay: () => (/* binding */ compplay)\n/* harmony export */ });\n// all comp does is that it assumes the role of player2 and chooses randomly\r\n// one of the available cells simple as that\r\n// let us try to go step by step\r\n// first let us think about this complay functio\r\n// it simply takes the board as input and\r\n// simplye chooses one that was not chosen before simple as that\r\n// alright, that's all what it does\r\nfunction compplay(board) {\r\n  // here comp randomly chooses a available cell\r\n  // this is backboard of player1\r\n  let possible_pos = [];\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      if (board.mat[i][j] == 0) possible_pos.push([i, j]);\r\n    }\r\n  }\r\n  let compchoice =\r\n    possible_pos[Math.floor(Math.random() * possible_pos.length)];\r\n  board.mat[compchoice[0]][compchoice[1]] = 1;\r\n  return compchoice;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/computer.js?");

/***/ }),

/***/ "./src/domstuff.js":
/*!*************************!*\
  !*** ./src/domstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createcells: () => (/* binding */ createcells),\n/* harmony export */   declarewinner: () => (/* binding */ declarewinner),\n/* harmony export */   displayboard2: () => (/* binding */ displayboard2),\n/* harmony export */   handleclickdom: () => (/* binding */ handleclickdom),\n/* harmony export */   maketheshipsappear: () => (/* binding */ maketheshipsappear),\n/* harmony export */   removeclicks: () => (/* binding */ removeclicks)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n// okay so how do we build the board itself,\r\n// the board and the backboard\r\n// let us use grid, yep let us do that easy peasy\r\n// yep that's it let's use a grid\r\n// alright so now i have the cells\r\n// i have the board setup\r\n// what is remaining in game logic ?\r\n// a lot of things are remaining\r\n// for now let us do that\r\n\r\nconst container = document.querySelector(\".container\");\r\n\r\nconst randomizebtn = document.getElementById(\"randomizebtn\");\r\nrandomizebtn.addEventListener(\"click\", () => {\r\n  maketheshipdissappear(_index__WEBPACK_IMPORTED_MODULE_0__.Game.board1);\r\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.randomize)();\r\n  maketheshipsappear(_index__WEBPACK_IMPORTED_MODULE_0__.Game.board1);\r\n});\r\nfunction createcells() {\r\n  const board = document.querySelector(\".board\");\r\n  const backboard = document.querySelector(\".backboard\");\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      let div = document.createElement(\"div\");\r\n      div.id = `f${i}${j}`;\r\n      div.className = \"cell\";\r\n      board.appendChild(div);\r\n    }\r\n  }\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      let div = document.createElement(\"div\");\r\n      div.id = `b${i}${j}`;\r\n      div.className = \"cell\";\r\n      backboard.appendChild(div);\r\n    }\r\n  }\r\n}\r\nfunction removeclicks() {\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      let cell = document.getElementById(`b${i}${j}`);\r\n      cell.removeEventListener(\"click\", _index__WEBPACK_IMPORTED_MODULE_0__.handleclick);\r\n    }\r\n  }\r\n}\r\nfunction displayboard2() {\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      if (_index__WEBPACK_IMPORTED_MODULE_0__.Game.board2.mat[i][j]) {\r\n        let cell = document.getElementById(`b${i}${j}`);\r\n        cell.classList.add(\"shipcell\");\r\n      }\r\n    }\r\n  }\r\n}\r\nfunction declarewinner(player) {\r\n  const belowtheboard = document.querySelector(\".belowtheboard\");\r\n  belowtheboard.innerText = `${[player]} has lost!!!`;\r\n  displayboard2();\r\n}\r\n\r\n// let us now make the cells clickable\r\n// alright so how should proceed ?\r\n// i should go ahead and first of all let us make it\r\n// playable,alright\r\nfunction handleclickdom(type, pos, mat) {\r\n  if (type == \"b\") {\r\n    let cell = document.getElementById(`b${pos[0]}${pos[1]}`);\r\n    // this is for the second board\r\n    // here the clicks will be made by me the player1\r\n    // this mat is of board2.mat\r\n    if (mat[pos[0]][pos[1]] == -1) {\r\n      cell.innerHTML = \"&#128293\";\r\n    } else {\r\n      cell.innerHTML = \"&#9679\";\r\n    }\r\n  } else {\r\n    let cell = document.getElementById(`f${pos[0]}${pos[1]}`);\r\n    // this is for the second board\r\n    // here the clicks will be made by me the player1\r\n    // this mat is of board2.mat\r\n    if (mat[pos[0]][pos[1]] == -1) {\r\n      cell.innerHTML = \"&#128293\";\r\n    } else {\r\n      cell.innerHTML = \"&#9679\";\r\n    }\r\n  }\r\n}\r\n\r\nfunction maketheshipdissappear(board) {\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      if (!board.mat[i][j]) continue;\r\n      const cell = document.getElementById(`f${i}${j}`);\r\n      cell.classList.remove(\"shipcell\");\r\n    }\r\n  }\r\n}\r\nfunction maketheshipsappear(board) {\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      if (!board.mat[i][j]) continue;\r\n      const cell = document.getElementById(`f${i}${j}`);\r\n      cell.classList.add(\"shipcell\");\r\n    }\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/domstuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game),\n/* harmony export */   handleclick: () => (/* binding */ handleclick),\n/* harmony export */   randomize: () => (/* binding */ randomize)\n/* harmony export */ });\n/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domstuff */ \"./src/domstuff.js\");\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer */ \"./src/computer.js\");\n\r\n\r\n(0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.createcells)();\r\n\r\nconst Ship = (length, spread) => {\r\n  let damage = 0;\r\n  let pos;\r\n  return { length, damage, spread, pos };\r\n};\r\nconst shallowCopy = (matrix) => matrix.map((row) => [...row]);\r\n\r\n// player what does a player do\r\n// player plays\r\n// he simply chooses a cell that's all what he does\r\n// he simply chooses  a cell\r\n//there is going to be two players in this game\r\n// the user should have option to play against the computer or random anon\r\n// let us first build the harder version where the two real players play\r\n// let us not yet kthink about separating them, let us keep it so that\r\n// both players can see each others boards, for now and thenm later i can hide them simply\r\n// so for now what i have to do, is i need two boards with random placement of ships\r\n// alright, let us think of the boards as two 10*10 matrices because it feels right\r\n// alright, next what i have to do is that , how do i do the random placement of ships\r\n// so i have the ship objects for now, what i will do is just simply place them\r\n// both boards will have the same ships as to not give unfair advantage\r\n// same ships just their position would be different\r\n// so now i have the ships and i also have a placetheship function let us define the board\r\n// let us keep the two boards global not a big problem ,later can handle it maybe\r\n// let us Board will have its own grid and its' shiplist yep\r\n// let us make the ships appear on the board now alright,\r\n\r\nfunction randomize() {\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      Game.board1.mat[i][j] = 0;\r\n    }\r\n  }\r\n  Game.board1.shiplist = [];\r\n  buildtheships(Game.board1.shiplist);\r\n  for (let ship of Game.board1.shiplist) {\r\n    placeTheship(ship, Game.board1.mat);\r\n  }\r\n}\r\nfunction turnchange() {\r\n  if (Game.turn == 1) {\r\n    Game.turn = 2;\r\n    // removeclicks();\r\n    let compchoice = (0,_computer__WEBPACK_IMPORTED_MODULE_1__.compplay)(Game.board1b);\r\n    handleclick(Game.board1, compchoice);\r\n  } else {\r\n    Game.turn = 1;\r\n    // Gameplay.addclick();\r\n  }\r\n}\r\nfunction handlewin(player) {\r\n  (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.removeclicks)();\r\n  (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.declarewinner)(player);\r\n}\r\nfunction handleclick(board, pos) {\r\n  if (board.mat[pos[0]][pos[1]] == 1) {\r\n    board.mat[pos[0]][pos[1]] = -1;\r\n    if (board.player == \"Player1\") {\r\n      (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.handleclickdom)(\"f\", pos, board.mat);\r\n    } else {\r\n      (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.handleclickdom)(\"b\", pos, board.mat);\r\n    }\r\n    board.damage += 1;\r\n    if (board.damage == 20) handlewin(board.player);\r\n    if (board.player == \"Player1\") {\r\n      Game.turn = 1;\r\n      turnchange();\r\n    }\r\n  } else if (board.mat[pos[0]][pos[1]] == 0) {\r\n    if (board.player == \"Player1\") {\r\n      (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.handleclickdom)(\"f\", pos, board.mat);\r\n    } else {\r\n      (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.handleclickdom)(\"b\", pos, board.mat);\r\n    }\r\n    // do something\r\n    turnchange();\r\n  } else {\r\n    //do nothing\r\n  }\r\n}\r\nconst Board = () => {\r\n  const mat = [];\r\n  for (let i = 0; i < 10; i++) {\r\n    let temp = [];\r\n    for (let j = 0; j < 10; j++) temp.push(0);\r\n    mat.push(temp);\r\n  }\r\n  const matback = [];\r\n  for (let i = 0; i < 10; i++) {\r\n    let temp = [];\r\n    for (let j = 0; j < 10; j++) temp.push(0);\r\n    mat.push(temp);\r\n  }\r\n  const shiplist = [];\r\n  let damage = 0;\r\n  let player;\r\n  return { mat, shiplist, damage, player };\r\n};\r\nfunction buildtheships(shiplist) {\r\n  const lengths = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];\r\n  const spreads = [\"vertical\", \"horizontal\"];\r\n  for (const l of lengths) {\r\n    const ship = Ship(l, spreads[Math.floor(Math.random() * 2)]);\r\n    shiplist.push(ship);\r\n  }\r\n}\r\nfunction placeTheship(ship, board) {\r\n  // board is a 10*10 matrix with some filled with 1' and 0's\r\n  // 1's is where ships are placed\r\n  // for now let us just hard code the ships it'll be better later i can think of randomizing that as well\r\n  // choose randomly among all possible positions\r\n  const possible_pos = [];\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      // determing if this can be a position\r\n      // let us check if space is available\r\n      let f = 0;\r\n      let f_ = 0;\r\n      for (let i_ = i; i_ < i + ship.length && i_ < 10; i_++)\r\n        if (board[i_][j] == 1) f = 1;\r\n      for (let j_ = j; j_ < j + ship.length && j_ < 10; j_++)\r\n        if (board[i][j_] == 1) f_ = 1;\r\n      if (ship.spread == \"vertical\") {\r\n        if (i + ship.length - 1 < 10 && f == 0) possible_pos.push([i, j]);\r\n      } else {\r\n        if (j + ship.length - 1 < 10 && f_ == 0) possible_pos.push([i, j]);\r\n      }\r\n    }\r\n  }\r\n  let choice = possible_pos[Math.floor(Math.random() * possible_pos.length)];\r\n  if (ship.spread == \"vertical\") {\r\n    for (let i = choice[0]; i < choice[0] + ship.length; i++) {\r\n      board[i][choice[1]] = 1;\r\n      // console.log(i, choice[1]);\r\n    }\r\n  } else {\r\n    for (let j = choice[1]; j < choice[1] + ship.length; j++) {\r\n      board[choice[0]][j] = 1;\r\n      // console.log(choice[0], j);\r\n    }\r\n  }\r\n}\r\n\r\nfunction printmat(mat) {\r\n  for (let i = 0; i < 10; i++) {\r\n    console.log(mat[i]);\r\n  }\r\n}\r\n\r\nconst Game = (() => {\r\n  let player1 = \"Player1\";\r\n  let player2 = \"Player2\";\r\n  let winner;\r\n  let board1;\r\n  let board1b = Board();\r\n  let board2;\r\n  let board2b;\r\n  let turn = 1;\r\n  board1 = Board();\r\n  board2 = Board();\r\n  board1.player = player1;\r\n  board2.player = player2;\r\n  buildtheships(board1.shiplist);\r\n  for (let ship of board1.shiplist) {\r\n    placeTheship(ship, board1.mat);\r\n  }\r\n  (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.maketheshipsappear)(board1);\r\n  buildtheships(board2.shiplist);\r\n  for (let ship of board2.shiplist) {\r\n    placeTheship(ship, board2.mat);\r\n  }\r\n  return { player1, player2, board1, board2, board1b, board2b, turn };\r\n\r\n  // now let us play\r\n  // only the board2b should be clickable,alright\r\n  // let us do that,right now\r\n})();\r\nconst Gameplay = (() => {\r\n  function addclick() {\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        let cell = document.getElementById(`b${i}${j}`);\r\n        cell.addEventListener(\"click\", () => {\r\n          handleclick(Game.board2, [i, j]);\r\n        });\r\n      }\r\n    }\r\n  }\r\n  addclick();\r\n  return { addclick };\r\n})();\r\n\r\n// so now the ships are appearing, now what do i do,\r\n// i also want them to be placed on the other players board yep, in need to do that as well\r\n// let us for now make the computer play\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;