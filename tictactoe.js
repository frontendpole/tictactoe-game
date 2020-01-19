const h1 = document.createElement('h1')
h1.textContent = 'Welcome to tic-tac-toe!';
document.body.appendChild(h1);
h1.classList.add('welcome');

const newGameBtn = document.createElement('button');

document.body.appendChild(newGameBtn);
newGameBtn.classList.add('newGame');

newGameBtn.textContent = "New game";

const newGameHandler = function () {
    const table = document.querySelector('table');
    document.body.removeChild(table);
    const gameTable = new GameTable();
}

function GameTable() {
    this.lastSign = 'o';
    this.table = this.createTable(3, 3);
    document.body.appendChild(this.table);
}

GameTable.prototype.results = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['a1', 'b2', 'c3'],
    ['c1', 'b2', 'a3'],
];

GameTable.prototype.createTd = function (id, className) {
    const td = document.createElement('td');
    td.id = id;
    td.className = className;
    td.addEventListener('click', this.tdClickHandler.bind(this));
    return td;
};


GameTable.prototype.createTr = function (idx, count) {
    const tr = document.createElement('tr');
    for (let i = 1; i <= count; i++) {
        const id = String.fromCharCode(97 + idx) + i;
        const td = this.createTd(id, 'cell');
        tr.appendChild(td);
    }
    return tr;
};

GameTable.prototype.createTable = function (rows, cols) {
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = this.createTr(i, cols);
        table.appendChild(tr);
    }
    return table;
}

GameTable.prototype.tdClickHandler = function (event) {
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
};

GameTable.prototype.detect = function () {
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

const gameTable = new GameTable();

newGameBtn.addEventListener('click', newGameHandler);