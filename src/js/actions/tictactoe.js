
import { PLAY_NEXT, REWIND_AND_PLAY, RESTART } from '../reducers/tictactoe';

export const playNext = (position, rewind = false) => {
    return  {
        type: PLAY_NEXT,
        tile: position,
        rewind: rewind
    }
};

export const rewindAndPlay = (step, position) => {
    return {
        type: REWIND_AND_PLAY,
        step: step,
        tile: position
    }
};

export const restart = () => {
    return {
        type: RESTART
    }
};