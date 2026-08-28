'use strict';

// WINNING_COMBOS, check, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const undoBtn     = document.getElementById('undo');
const redoBtn     = document.getElementById('redo');

let data = createInitialState();
const board = document.getElementById('board');

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = data.board[i];
    cell.className   = 'cell' + (data.board[i] ? ` ${data.board[i].toLowerCase()}` : '');
    cell.disabled    = data.board[i] !== '' || data.gameOver;
  });
}

function setStatus(msg, cls = '') {
  status.textContent = msg;
  status.className   = 'status' + (cls ? ` ${cls}` : '');
}

function handleClick(e) {
  const idx = Number(e.currentTarget.dataset.index);
  if (data.board[idx] || data.gameOver) return;

  const nextBoard = applyMove(data.board, idx, data.current);
  if (!nextBoard) return;
  data.board = nextBoard;
  render();

  // Animate the placed cell
  cells[idx].classList.add('placed');

  const result = check(data.board);

  if (result) {
    data.gameOver = true;
    if (result.winner) {
      result.combo.forEach(i => cells[i].classList.add('winning'));
      setStatus(`Player ${result.winner} wins!`, 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  data.current = getNextPlayer(data.current);
  setStatus(`Player ${data.current}'s turn`);
}

function restartGame() {
  data = createInitialState();
  render();
  setStatus(`Player ${data.current}'s turn`);
}

function undo(e) {
  if (data.gameOver) return;
  if (data.undoState !== null) return;

  // procura a última jogada feita
  const idx = data.board.findLastIndex(cell => cell !== '');
  if (idx === -1) return;

  const result = applyUndo(data.board, idx, data.undoState);
  if (!result) return;

  data.board = result.board;
  data.undoState = result.undoState;

  data.current = getNextPlayer(data.current);

  render();
  setStatus(`Player ${data.current}'s turn`);
}

function redo() {
  if (data.undoState === null) return;

  const idx = data.undoState.index;

  const result = applyRedo(data.board, idx, data.undoState);
  if (!result) return;

  data.board = result.board;
  data.undoState = result.undoState;

  data.current = getNextPlayer(data.current);

  render();
  setStatus(`Player ${data.current}'s turn`);
}


cells.forEach(cell => cell.addEventListener('click', handleClick));
undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
setStatus(`Player ${data.current}'s turn`);
