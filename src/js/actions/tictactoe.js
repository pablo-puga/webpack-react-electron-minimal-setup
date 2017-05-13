
import { PLAY_NEXT } from '../reducers/tictactoe';

export const playNext = (position) => {
    return  {
        type: PLAY_NEXT,
        tile: position
    }
};

export const rewind = (step) => {

};

export const restart = () => {

};