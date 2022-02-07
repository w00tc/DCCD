/*eslint-disable */
import {
    BLOCK_ALREADY_ADDED,
    CARGO_ID_NOT_FOUND,
    CARGO_INFORMATION_ALREADY_EXISTS,
    EMPTY_CHAIN,
    INVALID_ARGUMENT,
    INVALID_BLOCK,
    INVALID_BLOCK_HASH,
    INVALID_BLOCK_TRANSACTIONS,
    INVALID_MERKLE_ROOT,
    INVALID_SIGNATURE,
    INVALID_TRANSACTION,
    UNAUTHORIZED_PRIVATE_KEY,
    WRONG_CHAIN_HEIGHT_NUMBER,
    WRONG_PREVIOUS_BLOCK_HASH,
} from '../../assets/data/items';

import { SET_ITEMS, SET_STATUS, setStatus } from '../actions/items.actions';

const initialState = {
    items: [],
    status: undefined,
};

const items = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.items,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const errorHandler = (statusCode, dispatch) => {
    switch (statusCode) {
        case 0:
            break;
        case 7:
            dispatch(setStatus(CARGO_ID_NOT_FOUND));
            break;
        case 1:
            dispatch(setStatus(UNAUTHORIZED_PRIVATE_KEY));
            break;
        case 2:
            dispatch(setStatus(EMPTY_CHAIN));
            break;
        case 3:
            dispatch(setStatus(WRONG_CHAIN_HEIGHT_NUMBER));
            break;
        case 4:
            dispatch(setStatus(INVALID_ARGUMENT));
            break;
        case 5:
            dispatch(setStatus(INVALID_TRANSACTION));
            break;
        case 6:
            dispatch(setStatus(INVALID_SIGNATURE));
            break;
        case 8:
            dispatch(setStatus(BLOCK_ALREADY_ADDED));
            break;
        case 9:
            dispatch(setStatus(WRONG_PREVIOUS_BLOCK_HASH));
            break;
        case 10:
            dispatch(setStatus(INVALID_BLOCK_TRANSACTIONS));
            break;
        case 11:
            dispatch(setStatus(INVALID_BLOCK));
            break;
        case 12:
            dispatch(setStatus(INVALID_BLOCK_HASH));
            break;
        case 13:
            dispatch(setStatus(INVALID_MERKLE_ROOT));
            break;
        case 14:
            dispatch(setStatus(CARGO_INFORMATION_ALREADY_EXISTS));
            break;
        default:
            break;
    }
};

export default items;
