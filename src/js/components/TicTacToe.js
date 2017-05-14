import React, { Component } from 'react';
import { X, O } from '../reducers/tictactoe';
import '../../css/components/tictactoe.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {
        return (
            <div>
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

class TicTacToe extends Component {
    constructor() {
        super();
        this.state = {
            currentStep: 0,
            rewind: false
        };
    }

    handleClick(i) {
        const { history, playNext, rewindAndPlay } = this.props;
        if (this.state.rewind) {
            const past = history[this.state.currentStep];
            const squares = past.squares.slice();
            if (calculateWinner(squares) || squares[i] !== null) return;
            rewindAndPlay(this.state.currentStep, i);
            this.setState({
                currentStep: this.state.currentStep + 1,
                rewind: false
            });
        } else {
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[i] !== null) return;
            playNext(i);
            this.setState({
                currentStep: this.state.currentStep + 1,
            });
        }
    }

    jumpTo(step) {
        this.setState({
            currentStep: step,
            rewind: true
        });
    }

    restartGame() {
        const { restart } = this.props;
        this.setState({ currentStep: 0, rewind: false });
        restart();
    }

    render() {
        const { history } = this.props;
        let stepNumber = this.state.currentStep;
        const current = history[stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 'Move #' + move  + ' (' + step.player + ')': 'Game start';
            let style = {};
            if (move === stepNumber) style.fontWeight = 'bold';
            return (
                <li key={move}>
                    <span className="game-step" style={style} onClick={() => this.jumpTo(move)}>{desc}</span>
                </li>
            );
        });

        let status; let statusStyle = {};
        if (winner) {
            status = 'Winner: ' + winner;
            statusStyle.color = 'red';
        } else {
            status = 'Next player: ' + (current.player === X ? O : X);
        }

        const restartButton = (winner) => {
            if (winner) {
                let spanStyle = {
                    color: 'green',
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                };
                return (
                    <span style={spanStyle} onClick={() => this.restartGame()}>Restart Game</span>
                );
            }
            return(<span></span>);
        };

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div style={statusStyle}>{status}</div>
                    <ol>{moves}</ol>
                    <div>{restartButton(winner)}</div>
                </div>
            </div>
        );
    }
}

// ========================================

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

export default TicTacToe;