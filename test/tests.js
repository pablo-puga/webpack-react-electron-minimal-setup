import { helloWorldActionsTests } from './actions/helloworld.spec';
import { ticTacToeActionsTests } from './actions/tictactoe.spec';

describe('actions', () => {
    helloWorldActionsTests();
    ticTacToeActionsTests();
});
