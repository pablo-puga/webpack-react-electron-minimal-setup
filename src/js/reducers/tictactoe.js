
export const PLAY_NEXT = 'PLAY_NEXT';

export const X = 'X';
export const O = 'O';
const newState = {
    squares: new Array(9).fill(null),
    player: O
};

export const history = (state = [newState], action) => {
    switch (action.type) {
        case PLAY_NEXT:
            let squares = Object.assign({}, state[state.length - 1]).squares;
            squares[action.tile] = state[state.length - 1].player === X ? O : X;
            return [
                ...state,
                {
                    squares,
                    player: state[state.length - 1].player === X ? O : X
                }
            ];
            break;
        default:
            return state;
    }
};