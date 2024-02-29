const { JSDOM } = require('jsdom');
const { goHome, switchPlayer, getMarkSelected, showCurrentTurn, placeMark, checkWin } = require('./game');

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="currentTurn"></div><div id="cell-0"></div><div id="cell-1"></div><div id="cell-2"></div><div id="cell-3"></div><div id="cell-4"></div><div id="cell-5"></div><div id="cell-6"></div><div id="cell-7"></div><div id="cell-8"></div></body></html>');
global.document = dom.window.document;

global.localStorage = {
    getItem: jest.fn(),
};

describe('Game Functions', () => {
    beforeEach(() => {
        localStorage.getItem.mockClear();
        mark = '';
        currentPlayer = 1;
    });

    describe('goHome', () => {
        it('should navigate to the home page', () => {
            goHome();
            expect(window.location.href).toBe('../home/home.html');
        });
    });

    describe('switchPlayer', () => {
        it('should switch the current player', () => {
            switchPlayer();
            expect(currentPlayer).toBe(2);
        });

        it('should switch back to player 1 after two switches', () => {
            switchPlayer();
            switchPlayer();
            expect(currentPlayer).toBe(1);
        });
    });

    describe('getMarkSelected', () => {
        it('should get the mark from localStorage', () => {
            localStorage.getItem.mockReturnValueOnce('X');
            expect(getMarkSelected()).toBe('X');
            expect(localStorage.getItem).toHaveBeenCalledWith('mark');
        });
    });

    describe('checkWin', () => {
        it('should return the winning player if there is a winner', () => {
            // Mock winning scenario
            document.getElementById('cell-0').textContent = 'X';
            document.getElementById('cell-1').textContent = 'X';
            document.getElementById('cell-2').textContent = 'X';
            expect(checkWin()).toBe('X');
        });

        it('should return null if there is no winner', () => {
            // Mock no winner scenario
            document.getElementById('cell-0').textContent = 'X';
            document.getElementById('cell-1').textContent = 'O';
            document.getElementById('cell-2').textContent = 'X';
            expect(checkWin()).toBeNull();
        });
    });

});
