'use strict';

// WINNING_COMBOS, check, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const undoBtn     = document.getElementById('undo');
const redoBtn     = document.getElementById('redo');



let data = createInitialState();
var result = null;
const board = document.getElementById('board');

var hasUndone = false

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
  console.log('handleClick')
  const idx = Number(e.currentTarget.dataset.index);
  if (data.board[idx] || data.gameOver) return;

  handleMovePlacing(idx);
}

function handleMovePlacing(idx) {
  const nextBoard = applyMove(data.board, idx, data.current);
  if (!nextBoard) return;
  data.board = nextBoard;
  render();

  // Animate the placed cell
  cells[idx].classList.add('placed');

  result = check(data.board);

  if (result) {
    handleGameOver();
  } else {
    console.log('[handleMovePlacing] Not game over')

    data.current = getNextPlayer(data.current);
    setStatus(`Player ${data.current}'s turn`);
  }
  hasUndone = false
  redoBtn.innerText = '---'
  undoBtn.innerText = 'Undo'
}

function handleGameOver(){
  console.log('[handleGameOver]')
  data.gameOver = true;
    if (result.winner) {
      result.combo.forEach(i => cells[i].classList.add('winning'));
      setStatus(`Player ${result.winner} wins!`, 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    console.log('[handleGameOver] Finished')
    return;
}

function restartGame() {
  data = createInitialState();
  render();
  setStatus(`Player ${data.current}'s turn`);
  redoBtn.innerText = '---'
  undoBtn.innerText = '---'
}

function undo() {
  if (hasUndone) { return }
  if (result) {
    undoGameOver();
  } else {
    data.current = getNextPlayer(data.current);
  }

  hasUndone = true
  redoBtn.innerText = 'Redo'
  undoBtn.innerText = '---'

  let boardnext = undoMove(data.board);
  console.log('[undo]' + boardnext )
  if (boardnext == null) {
    data.current = getNextPlayer(data.current);
    return
  }
  data.board = boardnext
  setStatus(`Player ${data.current}'s turn`);
  render();
}

function undoGameOver()  {
  result = null
  data.gameOver = false
  cells.forEach(c => (c.disabled = false));
}

function redo() {
  hasUndone = false;
  redoBtn.innerText = '---'
  undoBtn.innerText = 'Undo'

  var idx = getLastMove();
  handleMovePlacing(idx);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);

redoBtn.innerText = '---'
undoBtn.innerText = '---'




// Initial render
render();
setStatus(`Player ${data.current}'s turn`);