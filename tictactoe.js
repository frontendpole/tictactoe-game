//in ES6 standard

class Header {
    constructor(header, text) {
        this.header = this.createHeader();
        this.text = this.addText();
    }
    createHeader() {
        const h1 = document.createElement('h1');
        document.body.appendChild(h1);
        h1.classList.add('welcome');
    }
    addText() {
        document.querySelector('h1').textContent = 'Welcome to tic-tac-toe!';
    }
}

const welcomeHeader = new Header();

class NewGameButton {
    constructor(button, name) {
        this.button = this.createButton();
        this.name = this.addName();
    }
    createButton() {
        const newGameBtn = document.createElement('button');
        document.body.appendChild(newGameBtn);
        newGameBtn.classList.add('newGame');
    };
    addName() {
        document.querySelector('button').textContent = "New game";
    }
}

const newGameBtn = new NewGameButton();

class GameTable {
    constructor(lastSign, table) {
        this.lastSign = 'o';
        this.table = this.createTable(3, 3);
        document.body.appendChild(this.table);
    }
    results = [
        ['a1', 'b1', 'c1'],
        ['a2', 'b2', 'c2'],
        ['a3', 'b3', 'c3'],
        ['a1', 'a2', 'a3'],
        ['b1', 'b2', 'b3'],
        ['c1', 'c2', 'c3'],
        ['a1', 'b2', 'c3'],
        ['c1', 'b2', 'a3'],
    ];
    createTd(id, className) {
        const td = document.createElement('td');
        td.id = id;
        td.className = className;
        td.addEventListener('click', this.tdClickHandler.bind(this));
        return td;
    }
    createTr(idx, count) {
        const tr = document.createElement('tr');
        for (let i = 1; i <= count; i++) {
            const id = String.fromCharCode(97 + idx) + i;
            const td = this.createTd(id, 'cell');
            tr.appendChild(td);
        }
        return tr;
    }
    createTable(rows, cols) {
        const table = document.createElement('table');
        for (let i = 0; i < rows; i++) {
            const tr = this.createTr(i, cols);
            table.appendChild(tr);
        }
        return table;
    }
    detect() {
        let win = false;
        const lnt = this.results.length;
        for (let row = 0; row < lnt; row++) {
            const resultsRow = this.results[row]
                .map(function (id) {
                    return document.querySelector('#' + id).dataset.sign;
                })
                .filter(function (res) {
                    return res !== undefined;
                })
            const result = resultsRow.length == 0 ? "" :
                resultsRow.reduce(function (a, b) {
                    return a + b;
                })
            if (result == 'xxx') {
                win = true;
                alert('Wygrał KRZYŻYK! GRATULACJE! Wciśnij przycisk "New Game", aby zagrać jeszcze raz! :)');
                return result;
            }
            if (result == 'ooo') {
                win = true;
                alert('Wygrało KÓŁKO! GRATULACJE! Wciśnij przycisk "New Game", aby zagrać jeszcze raz! :)');
                return result;
            }
        }
        return win;
    }
    tdClickHandler(event) {
        const target = event.target;
        if (target.dataset.sign) {
            return;
        }
        if (this.lastSign == 'x') {
            target.dataset.sign = 'o';
            target.innerHTML = '&cir;';
        } else {
            target.dataset.sign = 'x';
            target.innerHTML = '&times;';
        }
        this.lastSign = target.dataset.sign;
        console.log('is win', this.detect());
    }
}
const gameTable = new GameTable();

const newGameHandler = function () {
    const table = document.querySelector('table');
    document.body.removeChild(table);
    const gameTable = new GameTable();
}

document.querySelector('button').addEventListener('click', newGameHandler);