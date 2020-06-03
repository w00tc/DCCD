import {itemsAPI} from "../api/api";

const SET_PENDINGS = 'SET_PENDINGS'


let initialState = {
    pendings: []
}

const pendingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PENDINGS:
            return {
                ...state,
                pendings: action.pendings
            }
        default:
            return state;
    }
}

export const setPendings = (pendings) => ({type: SET_PENDINGS, pendings})

export const requestPendings = () => async (dispatch) => {
    let response = await itemsAPI.getPendings()
    dispatch(setPendings(response.data.data))
    console.log('good');
}

export default pendingsReducer;