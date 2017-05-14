import { helloWorldActionsTests } from './actions/helloworld.spec';
import { ticTacToeActionsTests } from './actions/tictactoe.spec';

import { ticTacToeReducersTests } from './reducers/tictactoe.spec';

describe('actions', () => {
    helloWorldActionsTests();
    ticTacToeActionsTests();
});

describe('reducers', () => {
    ticTacToeReducersTests();
});
