function startGame() {
    window.location.href = "../game/game.html";
}

function storeOption(input) {
    localStorage.setItem("mark", input);
} 

function getPlayerChoice() {
    const choice = prompt("Player 1, please select 'X' or 'O' to start:");
    if (choice === null) {
        return null;
    }
    const player1Mark = choice.toUpperCase();
    if (player1Mark === 'X' || player1Mark === 'O') {
        return player1Mark;
    } else {
        alert("Invalid choice! Please select 'X' or 'O'.");
        return getPlayerChoice();
    }
}

function initializeGame() {
    const player1Choice = getPlayerChoice();
    if (player1Choice !== null) {
        storeOption(player1Choice);
        startGame();
    } else {
        alert("Selection canceled or invalid input.");
    }
}
