// all comp does is that it assumes the role of player2 and chooses randomly
// one of the available cells simple as that
// let us try to go step by step
// first let us think about this complay functio
// it simply takes the board as input and
// simplye chooses one that was not chosen before simple as that
// alright, that's all what it does
function compplay(board) {
  // here comp randomly chooses a available cell
  // this is backboard of player1
  let possible_pos = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board.mat[i][j] == 0) possible_pos.push([i, j]);
    }
  }
  let compchoice =
    possible_pos[Math.floor(Math.random() * possible_pos.length)];
  board.mat[compchoice[0]][compchoice[1]] = 1;
  return compchoice;
}
export { compplay };
