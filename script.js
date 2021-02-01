class TicTacToe{
    constructor(){
        this.el = document.getElementById('tic-tac-toe');
        this.render();
    }
    render(){
        // create wrapper div
        const wrapper = document.createElement('div');
        wrapper.id = 'wrapper';

        for(let i = 1; i <=9; i++){
            // create cell div
            const cell = document.createElement('div');
            cell.id = `cell-${i}`;
            cell.classList.add('cell');

            // create span
            const span = document.createElement('span');

            // append span into cell
            cell.appendChild(span);

            // append cell into wrapper
            wrapper.append(cell);
            
        }

        this.el.append(wrapper);
    }
}

const game1 = new TicTacToe();
const game2 = new TicTacToe();

console.dir(game1);

