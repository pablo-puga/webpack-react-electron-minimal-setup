
export const PLAY_NEXT = 'PLAY_NEXT';
export const REWIND_AND_PLAY = 'REWIND_AND_PLAY';
export const RESTART = 'RESTART';

export const X = 'X';
export const O = 'O';

const newState = {
    squares: new Array(9).fill(null),
    player: O
};

const playNext = (lastState, playedTile) => {
    let nextState = {
        squares: [
            lastState.squares[0],
            lastState.squares[1],
            lastState.squares[2],
            lastState.squares[3],
            lastState.squares[4],
            lastState.squares[5],
            lastState.squares[6],
            lastState.squares[7],
            lastState.squares[8],
        ],
        player: lastState.player === X ? O : X
    };
    nextState.squares[playedTile] = lastState.player === X ? O : X;
    return nextState;
};

const rewindAndPlay = (history, step, tile) => {
    let newHistory = history.slice(0, step + 1);
    let lastState = newHistory[newHistory.length - 1];
    let nextState = playNext(lastState, tile);
    return [
        ...newHistory,
        nextState
    ];
};

export const history = (state = [newState], action) => {
    switch (action.type) {
        case PLAY_NEXT:
            let lastState = state[state.length - 1];
            return [
                ...state,
                playNext(lastState, action.tile)
            ];
            break;
        case REWIND_AND_PLAY:
            return [
                ...rewindAndPlay(state, action.step, action.tile)
            ];
            break;
        case RESTART:
            return [
                ...state.slice(0, 1)
            ];
            break;
        default:
            return state;
    }
};