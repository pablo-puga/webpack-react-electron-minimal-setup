import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const enhancer = applyMiddleware(middleware);

export const configureStore = (initialState) => {
    return createStore(rootReducer, initialState, enhancer);
};
