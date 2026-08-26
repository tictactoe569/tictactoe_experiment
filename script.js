'use strict';

// WINNING_COMBOS, check, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell'); // importando elementos de HTML
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');

let data = createInitialState(); // criação de variável
const board = document.getElementById('board'); // criação de variável constante



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

function handleClick(e) { // em uma célula

  const idx = Number(e.currentTarget.dataset.index);
  if (data.board[idx] || data.gameOver) return;

  const nextBoard = applyMove(data.board, idx);
  if (!nextBoard) return;
  data.board = nextBoard;
  render();

  const currentBoard = applyMove(data.board, idx, data.current);
  if (!currentBoard) return;
  data.board = currentBoard;
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

  //data.current = getNextPlayer(data.current); // preciso fazer uma dessa mas sem ir para o next player
  setStatus(`Player ${data.current}'s turn`);
}

function restartGame() {
  data = createInitialState();
  render();
  setStatus(`Player ${data.current}'s turn`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
setStatus(`Player ${data.current}'s turn`);
