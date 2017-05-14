import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import MainRoutes from '../routes';

const App = ({store, history}) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <MainRoutes/>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;