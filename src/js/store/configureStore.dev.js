import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import * as TicTacToeActions from '../actions/tictactoe';

export const configureStore = (initialState) => {
    const middleware = [];
    const enhancers = [];

    middleware.push(createLogger({
        level: 'info',
        collapse: true
    }));

    const actionCreators = {
        TicTacToeActions
    };

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
        : compose;

    enhancers.push(applyMiddleware(...middleware));
    const enhancer = composeEnhancers(...enhancers);

    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
