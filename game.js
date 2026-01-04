/**
 * Tic-Tac-Toe Game Logic
 * Follows Antigravity Protocol (Pure functions for logic, clean UI separation)
 */

// --- State Management ---
let state = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  status: 'ACTIVE', // 'ACTIVE', 'WIN', 'DRAW'
  winner: null
};

// --- Pure Game Logic ---
/**
 * Detects if there is a winner
 * @param {Array} board 
 * @returns {Object|null} { player, pattern } or null
 */
function checkWin(board) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], pattern };
    }
  }
  return null;
}

/**
 * Detects if the board is full (Draw)
 * @param {Array} board 
 * @returns {Boolean}
 */
function checkDraw(board) {
  return board.every(cell => cell !== null);
}

// --- DOM Manipulation / UI ---
const statusDisplay = document.getElementById('status-message');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

function updateUI() {
  cells.forEach((cell, index) => {
    cell.textContent = state.board[index] || '';
    cell.className = `cell ${state.board[index] || ''}`;

    // Highlight winning pattern
    if (state.winner && state.winner.pattern.includes(index)) {
      cell.classList.add('win');
    }

    if (state.board[index]) {
      cell.classList.add('taken');
    }
  });

  if (state.status === 'WIN') {
    statusDisplay.textContent = `Player ${state.winner.player} Wins!`;
  } else if (state.status === 'DRAW') {
    statusDisplay.textContent = "It's a Draw!";
  } else {
    statusDisplay.textContent = `Player ${state.currentPlayer}'s Turn`;
  }
}

function handleCellClick(e) {
  const index = parseInt(e.target.dataset.index);

  // Validation: Move only if cell is empty and game is active
  if (state.board[index] || state.status !== 'ACTIVE') return;

  // Update State
  state.board[index] = state.currentPlayer;

  const win = checkWin(state.board);
  if (win) {
    state.status = 'WIN';
    state.winner = win;
  } else if (checkDraw(state.board)) {
    state.status = 'DRAW';
  } else {
    // Switch Player
    state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
  }

  updateUI();
}

function initGame() {
  state = {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    status: 'ACTIVE',
    winner: null
  };
  updateUI();
}

// --- Initialization ---
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', initGame);

// Load initial state
initGame();
