import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import App from 'containers/App';

const renderApp = () => {
    ReactDOM.render(<App/>, document.getElementById('root'));
};

renderApp();

if (module.hot) {
    module.hot.accept(() => {
        renderApp()
    });
}