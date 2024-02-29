const { initializeGame, getPlayerChoice } = require('./game');

global.prompt = jest.fn();
global.localStorage.setItem = jest.fn();
// Mock window.location.assign
delete window.location;
window.location = { assign: jest.fn() };

describe('getPlayerChoice', () => {
    it('should return player choice when valid input is provided', () => {
        // Mock prompt to return 'X'
        prompt.mockReturnValueOnce('X');
        expect(getPlayerChoice()).toBe('X');
    });

    it('should retry input if invalid choice is provided', () => {
        // Mock prompt to return 'Z' first, then 'O'
        prompt.mockReturnValueOnce('Z').mockReturnValueOnce('O');
        expect(getPlayerChoice()).toBe('O');
    });

    it('should return null if prompt is canceled', () => {
        // Mock prompt to return null
        prompt.mockReturnValueOnce(null);
        expect(getPlayerChoice()).toBe(null);
    });
});

describe('storeOption', () => {
    it('should store the option in local storage', () => {
        storeOption('X');
        expect(localStorage.setItem).toHaveBeenCalledWith('mark', 'X');
    });
});

describe('startGame', () => {
    it('should navigate to the game page', () => {
        startGame();
        expect(window.location.assign).toHaveBeenCalledWith("../game/game.html");
    });
});
// Mock other functions like localStorage.setItem and window.location.href if needed
