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
/***flags[flag_can_make_redo, flag_can_make_undo, flag_undo_made, flag_redo_made] */

/**
 * Returns the next player given the current one.
 * @param {'X'|'O'} current
 * @returns {'X'|'O'}
 */
function getNextPlayer(current, flags) {
  flag_undo_made = flags[2]
  flag_redo_made = flags[3]
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
function applyMove(board, index, player, flags) {
  flag_undo_made = flags[2]
  flag_redo_made = flags[3]
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

/***flags[flag_can_make_redo, flag_can_make_undo, flag_undo_made, flag_redo_made] */

function undo(last_move, flags){

  console.log("undo called")

  if (!last_move){
    return
  }
  /**can make undo */
  if(!flags[1]){
    return
  }

  flags[0] = true
  flags[1] = false
  flags[2] = true
  return flags


}


function redo(last_move, flags){
  if (!last_move){
    return
  }
  /** can make undo */
  if(!flags[1]){
    return
  }

  flags[0] = false
  flags[1] = false
  flags[3] = true
  return flags


}

function clear_flags(flags){
  flags[0] = false
  flags[1] = false
  flags[2] = false
  flags[3] = false

  return flags

}
