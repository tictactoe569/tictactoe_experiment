'use strict';



// WINNING_COMBOS, check, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');

const undoBtn     = document.getElementById('undo');
const redoBtn     = document.getElementById('redo');

let undoCounter = 0
let redoCounter = 0

let data = createInitialState();
const board = document.getElementById('board'); // VARIAVEL NAO USADA

let prevBoard;

let redoBoard;

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = data.board[i];
    cell.className   = 'cell' + (data.board[i] ? ` ${data.board[i].toLowerCase()}` : '');
    cell.disabled    = data.board[i] !== '' || data.gameOver;
  });
}

function setStatus(msg, cls = '') {
  status.textContent = msg;
  status.className   = 'status' + (cls ? ` ${cls}` : ''); // METODO DEPRECEADO
}

//HELPER FEITO
function checkEndGame()
{
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
    
        
    return true;
  }
  return false
}


function handleClick(e) {

  undoCounter = 0;
  redoCounter = 0;

  const idx = Number(e.currentTarget.dataset.index);
  if (data.board[idx] || data.gameOver) return;

  prevBoard = data.board

  const nextBoard = applyMove(data.board, idx, data.current);
  if (!nextBoard) return;
  data.board = nextBoard;
  render();

  redoBoard = data.board

  // Animate the placed cell
  cells[idx].classList.add('placed');


  if (checkEndGame())
  {
    return
  }

  data.current = getNextPlayer(data.current); 
  setStatus(`Player ${data.current}'s turn `); 
}

function restartGame() {
  data = createInitialState();
  render();
  setStatus(`Player ${data.current}'s turn`);
}

function undo(){  

  if (undoCounter >= 1 || !prevBoard)
  {
    return
  }

  if (checkEndGame())
  {
    cells.forEach(c => (c.disabled = false));
  }

  data.current = getNextPlayer(data.current);
  setStatus(`Player ${data.current}'s turn `);
  redoCounter = 0;
  undoCounter++;
  data.board = prevBoard
  render()
  

}



function redo(){  


  if (redoCounter >= 1 || !prevBoard)
  {
    return
  }


  if (checkEndGame())
  {
    cells.forEach(c => (c.disabled = false));
  }


  data.current = getNextPlayer(data.current);
  setStatus(`Player ${data.current}'s turn `);
  undoCounter = 0;
  redoCounter++;
  data.board = redoBoard
  render()
  checkEndGame();


}


cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);


undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);

// Initial render
render();
setStatus(`Player ${data.current}'s turn`);
