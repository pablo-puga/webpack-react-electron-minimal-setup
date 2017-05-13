import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import MainRoutes from '../routes';

const App = ({store, history}) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <MainRoutes/>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;