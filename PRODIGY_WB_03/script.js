let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    if (checkWinner()) {
      document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (gameBoard.every(cell => cell !== '')) {
      document.getElementById('result').innerText = 'It\'s a draw!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winningCombinations.some(combination =>
    gameBoard[combination[0]] !== '' &&
    gameBoard[combination[0]] === gameBoard[combination[1]] &&
    gameBoard[combination[1]] === gameBoard[combination[2]]
  );
}
