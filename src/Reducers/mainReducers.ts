import * as actionTypes from '../Actions/types';

const initialState = {
    test: ''
};

export default function (state = initialState, action: any) {
    const {type, payload} = action;
    switch (type) {
        case actionTypes.CONFIG_PULLED: {
            return {
                ...state,
                test: payload
            }
        }
        default:
            return state;
    }
}
