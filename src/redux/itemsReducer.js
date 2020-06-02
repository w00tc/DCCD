import {itemsAPI} from "../api/api";
const SET_ITEMS = 'SET_ITEMS'


let initialState = {
    items: []
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.items
            }
        default:
            return state;
    }
}

export const setItems = (items) => ({type:SET_ITEMS, items})

export const requestItems = (cargoId) => async (dispatch) => {
    let response = await itemsAPI.getItems(cargoId)
    dispatch(setItems(response.data.data))
    console.log('good');
}

export const postItems = (dictionary) => async (dispatch) => {
    let response = await itemsAPI.postItems(dictionary);
    console.log(response)
}

export default itemsReducer;