export class Header {
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
