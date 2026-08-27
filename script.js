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
  if (data.undo && nextBoard == data.board_old) return; //se undo e jogada anterior, nao fazer
  data.undo = false;
  data.board_old = data.board.slice();
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

  data.old = data.current.slice();
  data.current = getNextPlayer(data.current);
  setStatus(`Player ${data.current}'s turn`);
}

function restartGame() {
  data = createInitialState();
  render();
  setStatus(`Player ${data.current}'s turn`);
}

function undo()
{
  //if (data.undo || data.old == '') return;
  temp = data.board.slice();
  data.board = data.board_old.slice();
  data.board_old = temp;
  temp_2 = data.current.slice();
  data.current = data.old.slice();
  data.old = temp_2;
  data.undone= true;
  data.gameOver = false;
  // render();
  // cells[idx].classList.add('placed');
}

function redo()
{
  //if (! data.undo || data.old == '') return;
  temp = data.board.slice();
  data.board = data.board_old.slice();
  data.board_old = temp;
  temp_2 = data.current.slice();
  data.current = data.old.slice();
  data.old = temp_2;
  // render();
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);

// Initial render
render();
setStatus(`Player ${data.current}'s turn`);
