import React from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: this.props.playX,
            isWithAI: this.props.isWithAI,
        }
    }

    playComputerMove(arr) {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let index = getRandomInt(0, 8);
        for (let i = 0; i < arr.length; i++) {
            if (arr[index] === null) {
                return index;
            } else {
                index = getRandomInt(0, 8);
            }
        }
        return -1;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
        if (this.state.isWithAI === true) {
            // code for playing with ai
            let aiMove = this.playComputerMove(squares);
            if (aiMove >= 0) {
                console.log('ai',aiMove, this.state.xIsNext)
                squares[aiMove] = !this.state.xIsNext ? 'X' : 'O';
                this.setState({
                    squares: squares,
                    xIsNext: this.state.xIsNext,
                });
            }
        }
    }
    resetGame() {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        });
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        const isDraw = this.state.squares.every((e) => e !== null);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else if (isDraw) {
            status = 'Match Draw';
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <button className="btn btn-primary reset" onClick={() => this.resetGame()}>Restart</button>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;