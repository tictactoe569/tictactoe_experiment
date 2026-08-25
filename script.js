'use strict';

// WINNING_COMBOS, check, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
let undoB = document.getElementById("undo"); 
let redoB = document.getElementById("redo");
let undoStack = [];
let redoStack = [];

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
  undoStack = [];
  undoStack.push(data.board);
  data.board = nextBoard;
  render();

  // Animate the placed cell
  cells[idx].classList.add('placed');

  const result = check(data.board);

  if (result) {
    data.gameOver = true;

    undoStack.push(data.current);
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

  undoStack.push(data.current);
  data.current = getNextPlayer(data.current);
  setStatus(`Player ${data.current}'s turn`);
}

function restartGame() {
  undoStack = [];
  redoStack = [];
  data = createInitialState();
  render();
  setStatus(`Player ${data.current}'s turn`);
}

function handleMouseUp() {
    clicked = false;
    //Push the image to the history
    undoStack.push(source)
    redoStack = [];
}

function handleUndo() {
    if (undoStack.length>1) {
        undo();
    }
}
function handleRedo() {
    if (redoStack.length>=1) {
        redo();
    }
}

//Undo the previous action
function undo() {
    redoStack.push(undoStack.pop());
    source = getTopImage();
    
    redoStack.push(data.current);
    redoStack.push(data.board);
    
    data.board = undoStack[0];
    data.current = undoStack[1];

    setStatus(`Player ${data.current}'s turn`);

    render();
}
//Undo the previous action
function redo() {
    undoStack.push(redoStack.pop());
    source = getTopImage();
    render();
}



cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
undoB.addEventListener('click', handleUndo) 
redoB.addEventListener('click', handleRedo)

// Initial render
render();
setStatus(`Player ${data.current}'s turn`);
