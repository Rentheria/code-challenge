localStorage.setItem("mark", '')

function startGame() {
    window.location.href = "../game/game.html";
}

function storeOption(input) {
    localStorage.setItem("mark", input);
} 

function showSelectionPopup() {
    const choice = prompt("Player 1, please select 'X' or 'O' to start:");
    if (choice !== null) {
        const player1Mark = choice.toUpperCase();
        if (player1Mark === 'X' || player1Mark === 'O') {
            storeOption(player1Mark);
            startGame();
        } else {
            alert("Invalid choice! Please select 'X' or 'O'.");
            showSelectionPopup();
        }
    }
}