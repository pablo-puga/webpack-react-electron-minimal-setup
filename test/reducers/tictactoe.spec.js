import assert from 'assert';
import { history as historyReducer, PLAY_NEXT, REWIND_AND_PLAY, RESTART, X, O } from '../../src/js/reducers/tictactoe';
const initialState = [
    {
        squares: new Array(9).fill(null),
        player: O
    }
];
const customState = [
    {
        squares: new Array(9).fill(null),
        player: O
    },
    {
        squares: [X, null, null, null, null, null, null, null, null],
        player: X
    },
    {
        squares: [X, null, null, O, null, null, null, null, null],
        player: O
    }
];

export const ticTacToeReducersTests = () => {
    describe('TicTacToe History Reducer', () => {
        it ('should handle initial state', () => {
            assert.deepEqual(initialState, historyReducer(undefined, {}))
        });

        it ('should handle ' + PLAY_NEXT + ' action', () => {
            let nextState = [
                ...customState,
                {
                    squares: [X, null, null, O, null, null, null, null, X],
                    player: X
                }
            ];
            assert.deepEqual(nextState, historyReducer(customState, {
                type: PLAY_NEXT,
                tile: 8
            }));
        });

        it ('should handle ' + REWIND_AND_PLAY + ' action', () => {
            let step = 1;
            let nextState = [
                ...customState.slice(0, step + 1),
                {
                    squares: [X, null, null, null, null, O, null, null, null],
                    player: O
                }
            ];
            assert.deepEqual(nextState, historyReducer(customState, {
                type: REWIND_AND_PLAY,
                tile: 5,
                step: step
            }));
        });

        it ('should handle ' + RESTART + ' action', () => {
            assert.deepEqual(initialState, historyReducer(customState, { type: RESTART }))
        });

        it ('should handle unknown action type', () => {
            assert.deepEqual(customState, historyReducer(customState, { type: 'UNKNOWN' }))
        });
    });
};