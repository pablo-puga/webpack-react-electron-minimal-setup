import assert from 'assert';
import * as TicTacToeActions from '../../src/js/actions/tictactoe';
import { PLAY_NEXT, REWIND_AND_PLAY, RESTART } from '../../src/js/reducers/tictactoe';

export const ticTacToeActionsTests = () => {
    describe('TicTacToe Actions', () => {
        describe('playNext', () => {
            it ('should create the playNext action with the given tile position', () => {
                let playedTile = 5;
                let expected = {
                    type: PLAY_NEXT,
                    tile: playedTile
                };
                assert.deepEqual(expected, TicTacToeActions.playNext(playedTile));
            });
        });

        describe('rewindAndPlay', () => {
            it ('should create the rewindAndPlay action with the given history step and tile position', () => {
                let playedTile = 5;
                let rewindStep = 2;
                let expected = {
                    type: REWIND_AND_PLAY,
                    step: rewindStep,
                    tile: playedTile
                };
                assert.deepEqual(expected, TicTacToeActions.rewindAndPlay(rewindStep, playedTile));
            });
        });

        describe('restart', () => {
            it ('should create the restart action', () => {
                let expected = {
                    type: RESTART
                };
                assert.deepEqual(expected, TicTacToeActions.restart());
            });
        });
    });
};