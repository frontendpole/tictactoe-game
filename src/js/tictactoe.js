import {GameTable} from "./game-table";

class TicTacToe {
    constructor() {
        this.gameTable = new GameTable();
        document.querySelector('button').addEventListener('click', this.newGameHandler.bind(this));
    }

    newGameHandler() {
        this.gameTable.resetGame();
    };
}

const game = new TicTacToe();


// const welcomeHeader = new Header();
// const newGameBtn = new NewGameButton();
// const gameTable = new GameTable();
//
// const newGameHandler = function () {
//     const table = document.querySelector('table');
//     document.body.removeChild(table);
//     const gameTable = new GameTable();
// };


