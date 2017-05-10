import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Switch } from 'react-router';
import MainRoutes from '../routes';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return(
            <AppContainer>
                <Router history={history}>
                    <Switch>
                        <MainRoutes/>
                    </Switch>
                </Router>
            </AppContainer>
        );
    }
}

export default App;