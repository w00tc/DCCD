import {itemsAPI} from "../api/api";

const SET_ITEMS = 'SET_ITEMS'
const SET_STATUS = 'SET_STATUS'
const OK = 'OK';
const UNAUTHORIZED_PRIVATE_KEY = 'UNAUTHORIZED_PRIVATE_KEY'
const EMPTY_CHAIN = 'EMPTY_CHAIN'
const WRONG_CHAIN_HEIGHT_NUMBER = 'WRONG_CHAIN_HEIGHT_NUMBER'
const INVALID_ARGUMENT = 'INVALID_ARGUMENT'
const INVALID_TRANSACTION = 'INVALID_TRANSACTION'
const INVALID_SIGNATURE = 'INVALID_SIGNATURE'
const CARGO_ID_NOT_FOUND = 'Your cargo id not found'
const BLOCK_ALREADY_ADDED = 8
const WRONG_PREVIOUS_BLOCK_HASH = 9
const INVALID_BLOCK_TRANSACTIONS = 10
const INVALID_BLOCK = 11
const INVALID_BLOCK_HASH = 12
const INVALID_MERKLE_ROOT = 13
const CARGO_INFORMATION_ALREADY_EXISTS = "First information already exists, leave information field empty"
let initialState = {
    items: [],
    status: undefined
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.items
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const setItems = (items) => ({type: SET_ITEMS, items})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const errorHandler = (statusCode, dispatch) => {
    switch (statusCode) {
        case 0:
            break;
        case 7:
            dispatch(setStatus(CARGO_ID_NOT_FOUND))
            break;
        case 1:
            dispatch(setStatus(UNAUTHORIZED_PRIVATE_KEY))
            break;
        case 2:
            dispatch(setStatus(EMPTY_CHAIN))
            break;
        case 3:
            dispatch(setStatus(WRONG_CHAIN_HEIGHT_NUMBER))
            break;
        case 4:
            dispatch(setStatus(INVALID_ARGUMENT))
            break;
        case 5:
            dispatch(setStatus(INVALID_TRANSACTION))
            break;
        case 6:
            dispatch(setStatus(INVALID_SIGNATURE))
            break;
        case 8:
            dispatch(setStatus(BLOCK_ALREADY_ADDED))
            break;
        case 9:
            dispatch(setStatus(WRONG_PREVIOUS_BLOCK_HASH))
            break;
        case 10:
            dispatch(setStatus(INVALID_BLOCK_TRANSACTIONS))
            break;
        case 11:
            dispatch(setStatus(INVALID_BLOCK))
            break;
        case 12:
            dispatch(setStatus(INVALID_BLOCK_HASH))
            break;
        case 13:
            dispatch(setStatus(INVALID_MERKLE_ROOT))
            break;
        case 14:
            dispatch(setStatus(CARGO_INFORMATION_ALREADY_EXISTS))
            break;
    }
}
export const requestItems = (cargoId) => async (dispatch) => {
    let response = await itemsAPI.getItems(cargoId)
    errorHandler(response.data.result_code, dispatch);
    dispatch(setItems(response.data.data))
    console.log("good")
}


export const postItems = (dictionary) => async (dispatch) => {
    let response = await itemsAPI.postItems(dictionary);
    errorHandler(response.data.result_code, dispatch)
    if (response.data.result_code === 0) {
        dispatch(setStatus("Transaction sent"))
    }
    console.log(response)
}

export default itemsReducer;