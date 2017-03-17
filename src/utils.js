export function checkWinner(board) {
  /**
   *  check for rows
   */
  for (let i = 0; i < board.length; i += 1) {
    let temp = true;
    for (let j = 0; j < board[i].length; j += 1) {
      if ((board[i][j] !== board[i][0]) ||
        board[i][j] === '') temp = false;
    }
    if (temp) return board[i][0];
  }

  /**
   *  check for columns
   */
  for (let i = 0; i < board.length; i += 1) {
    let temp = true;
    for (let j = 0; j < board[i].length; j += 1) {
      if ((board[j][i] !== board[0][i]) ||
        board[j][i] === '') temp = false;
    }
    if (temp) return board[0][i];
  }

  /**
   *  check for main diagonal
   */
  let tempMain = true;
  for (let i = 0; i < board.length; i += 1) {
    if ((board[i][i] !== board[0][0]) ||
      board[i][i] === '') tempMain = false;
  }
  if (tempMain) return board[0][0];

  /**
  *  check for main diagonal
  */
  let tempSec = true;
  for (let i = 0; i < board.length; i += 1) {
    if ((board[i][board.length - i - 1] !== board[2][0]) ||
      board[i][board.length - i - 1] === '') tempSec = false;
  }
  if (tempSec) return board[2][0];

  return false;
}

export function isBoardFull(board) {
  /**
   *   is board full
   */
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === '') return false;
    }
  }

  return true;
}

