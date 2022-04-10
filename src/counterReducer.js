import { types } from "./types";

export const reducer = (state, action) => {
    switch (action.type) {
        case types.increment:
            return {
                ...state,
                count: state.count + state.number,
            };
        case types.decrement:
            return {
                ...state,
                count: state.count - state.number,
            };
        case types.changeNumber:
            return {
                ...state,
                number: action.payload,
            };
        case types.resetCounter:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};
