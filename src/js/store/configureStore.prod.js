import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export const configureStore = (initialState) => {
    return createStore(rootReducer, initialState);
};
