import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from 'pages/Home';
import TicTacToePage from 'pages/TicTacToe';

export default () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/tictactoe" component={TicTacToePage}/>
            </Switch>
        </Router>
    );
};