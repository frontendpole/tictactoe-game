export class NewGameButton {
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
