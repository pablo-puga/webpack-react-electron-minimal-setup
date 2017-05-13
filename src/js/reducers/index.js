import { combineReducers } from 'redux';
import { history } from './tictactoe';

const rootReducer = combineReducers({
    history
});

export default rootReducer;
