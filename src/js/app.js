import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'containers/App';
import '../css/app.css';

import { configureStore, history } from 'store/configureStore'

const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <App history={history} store={store}/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('containers/App', () => {
        const HotApp = require('containers/App');
        ReactDOM.render(
            <AppContainer>
                <HotApp history={history} store={store}/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}