'use strict';

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],            // diagonals
];

/**
 * Returns the initial game state.
 */
function createInitialState() {
  return {
    board:   Array(9).fill(''),
    current: 'X',
    gameOver: false,
    flags: [false, false, false, false],
    last_move: [],
  };
}

/**
 * Returns the next player given the current one.
 * @param {'X'|'O'} current
 * @returns {'X'|'O'}
 */
function getNextPlayer(current, flag_undo_made, flag_redo_made) {
  console.log(flag_undo_made)
  if ((!flag_undo_made) || (flag_redo_made)){
    return current === 'X' ? 'O' : 'X';
  }
  else return current
}

/**
 * Returns a new board with the move applied, or null if the move is invalid.
 * @param {string[]} board
 * @param {number}   index  0-8
 * @param {'X'|'O'} player
 * @returns {string[]|null}
 */
function applyMove(board, index, player, flag_undo_made, flag_redo_made) {
  if (index < 0 || index > 8) return null;
  if (board[index] !== '')    return null;

  if (flag_undo_made){
    var next = takeOff(last_move)
  }
  else if (flag_redo_made){
    var next = last_move
  }
  else{
    var next = board.slice();
  }
  next[index] = player;
  return next;
}


/**
 * Returns a new board without the move applied, or null if the move is invalid.
 * @param {string[]} board
 * @param {number}   index  0-8
 * @param {'X'|'O'} player
 * @returns {string[]|null}
 */
function takeOff(board, index, player) {
  if (index < 0 || index > 8) return null;
  if (board[index] !== '')    return null;


  
  next[index] = '';
  return next;
}

/**
 * Checks the board for a winner or draw.
 * @param {string[]} board
 * @returns {{ winner: string, combo: number[] }|{ winner: null, combo: [] }|null}
 *   - Object with winner ('X'|'O') and winning combo indices if someone won.
 *   - Object with winner null and empty combo if the board is full (draw).
 *   - null if the game is still in progress.
 */
function check(board) {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo };
    }
  }
  if (board.every(cell => cell !== '')) return { winner: null, combo: [] };
  return null;
}

// Allow require() in Node.js (Jest) while remaining a plain script in the browser.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WINNING_COMBOS, createInitialState, getNextPlayer, applyMove, check };
}


function undo(last_move, flag_undo_made, flag_can_make_redo,flag_can_make_undo){
    console.log("undo called")

  if (!last_move){
    return
  }
  if(!flag_can_make_undo){
    return
  }

  flag_can_make_redo = true
  flag_can_make_undo = false
  flag_undo_made = true
  return[flag_can_make_redo, flag_can_make_undo, flag_undo_made, flag_redo_made]


}


function redo(last_move, flag_redo_made, flag_can_make_redo,flag_can_make_undo){
  if (!last_move){
    return
  }
  if(!flag_can_make_undo){
    return
  }

  flag_can_make_redo = false
  flag_can_make_undo = false
  flag_redo_made = true
  return[flag_can_make_redo, flag_can_make_undo, flag_undo_made, flag_redo_made]


}

function clear_flags(flag_undo_made, flag_redo_made, flag_can_make_redo,flag_can_make_undo){
  flag_can_make_redo = false
  flag_can_make_undo = false
  flag_undo_made = false
  flag_redo_made = false

  return[flag_can_make_redo, flag_can_make_undo, flag_undo_made, flag_redo_made]

}
