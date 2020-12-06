import { BUY_EGG } from './eggTypes';

export const buyEgg = (number=1) => ({
    type: BUY_EGG,
    payload: number
});