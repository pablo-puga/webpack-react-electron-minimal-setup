import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from 'pages/Home';
import TicTacToePage from 'pages/TicTacToe';

export default () => {
    return(
        <div>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/tictactoe" component={TicTacToePage}/>
        </div>
    );
};