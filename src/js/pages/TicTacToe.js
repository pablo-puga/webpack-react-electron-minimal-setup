import React from 'react';
import { Link } from 'react-router-dom';
import TicTacToeGame from '../components/TicTacToe';

export default () => {
    return (
        <div>
            <h2>Tic-Tac-Toe Game</h2>
            <TicTacToeGame/>
            <p><Link to="/">Go back to the home page</Link></p>
        </div>
    );
};
