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
    isUndoRedo: false,
  };
}

/**
 * Returns the next player given the current one.
 * @param {'X'|'O'} current
 * @returns {'X'|'O'}
 */
function getNextPlayer(current) {
  return current === 'X' ? 'O' : 'X';
}

/**
 * Returns a new board with the move applied, or null if the move is invalid.
 * @param {string[]} board
 * @param {number}   index  0-8
 * @param {'X'|'O'} player
 * @returns {string[]|null}
 */
function applyMove(board, index, player) {
  if (index < 0 || index > 8) return null;
  if (board[index] !== '')    return null;
  const next = board.slice();
  next[index] = player;
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

// enable the `UndoRedo` plugin
undo: true,

undoRedo.undo()
undoRedo.redo()
let undoBtn = document.getElementById("undo");
let redoBtn = document.getElementById("redo");

function createUndoRedo(initial, options = {}) {
  const { trace, historyLimit = Infinity } = options;
  let _historyLimit = historyLimit;
  let _trimStartArray = createTrimStartArray(_historyLimit);
  let _timeline = {
    past: [],
    current: initial,
    future: []
  };
  log("init");

  function log(str = "") {
    trace && console.log(str, this.current);
  }

  function _getCurrent() {
    return _timeline.current;
  }

  function _canUndo() {
    return _timeline.past.length > 0;
  }

  function _canRedo() {
    return _timeline.future.length > 0;
  }

  function update(next) {
    // update the current value
    const { past, current } = _timeline;
    // calculate history storage limit
    const limitedPast = _trimStartArray(past);
    _timeline = {
      past: [...limitedPast, current],
      current: next,
      // reset redo, don't allow redo if we update in the middle of the timeline
      // this seems to be the idiomatic approach for most applications
      future: []
    };
    log("update");
    return this.current;
  }

  function undo() {
    if (this.canUndo) {
      const { past, current, future } = _timeline;
      const [restOfArr, lastItem] = stripLast(past);
      _timeline = {
        past: restOfArr,
        current: lastItem,
        future: [...future, current]
      };
      log("undo");
      return this.current;
    }
  }

  function redo() {
    if (this.canRedo) {
      const { past, current, future } = _timeline;
      const [restOfArr, lastItem] = stripLast(future);
      _timeline = {
        past: [...past, current],
        current: lastItem,
        future: restOfArr
      };
      log("redo");
      return this.current;
    }
  }

  const publicAPI = {
    update,
    undo,
    redo,
    get current() {
      return _getCurrent();
    },
    get canRedo() {
      return _canRedo();
    },
    get canUndo() {
      return _canUndo();
    },
    get historyLimit() {
      return _historyLimit;
    },
    set historyLimit(val) {
      _historyLimit = val;
      _trimStartArray = createTrimStartArray(_historyLimit);
    }
  };

  return publicAPI;
}