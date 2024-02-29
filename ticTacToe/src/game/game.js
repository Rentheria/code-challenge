let mark = '';
let currentPlayer = 1;

function validateVariables() {
    if (!getMarkSelected()) goHome();
}

function goHome() {
    window.location.href = "../home/home.html";
}

function switchPlayer() {
    const currentClone = currentPlayer;
    currentPlayer = 1 === currentClone ? 2 : 1
}

function getMarkSelected() {
    return localStorage.getItem("mark");
}

function showCurrentTurn() {
    const playerName = currentPlayer === 1 ? 'Player 1' : 'Player 2';
    const currentTurnElement = document.getElementById("currentTurn");
    if (currentTurnElement.classList.value === "") {
        currentTurnElement.classList.add(mark === 'X' ? 'blue' : 'red');
    } else {
        currentTurnElement.classList.remove(mark === 'X' ? 'red' : 'blue');
        currentTurnElement.classList.add(mark === 'X' ? 'blue' : 'red');
    }
    currentTurnElement.innerText = "Current Turn - " + playerName + "\n" + mark;
    switchPlayer();
}

function placeMark(cellIndex) {
    const cell = document.getElementById(`cell-${cellIndex}`);
    if (cell.textContent === '') {
        cell.textContent = mark;
        cell.classList.add(`player${mark}`);
        const winner = checkWin();
        if (winner) {
            mark = mark === 'X' ? 'O' : 'X';
            setTimeout(() => {
                alert(`Player ${winner} wins!`);
                goHome();
            }, 100);
        }
        else {
            mark = mark === 'X' ? 'O' : 'X';
            showCurrentTurn();
        }
    }
}

function checkWin() {
    const gameBoard = [];
    for (let i = 0; i < 9; i++) {
        gameBoard.push(document.getElementById(`cell-${i}`).textContent);
    }

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const marks = [gameBoard[a], gameBoard[b], gameBoard[c]];
        if (marks.every(mark => mark === marks[0] && mark !== '')) {
            return marks[0];
        }
    }

    return null;
}

document.addEventListener("DOMContentLoaded", function() {
    validateVariables();
    mark = getMarkSelected();
    showCurrentTurn();
})

