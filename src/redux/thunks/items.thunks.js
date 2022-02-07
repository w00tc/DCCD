import { itemsAPI } from '../../api/api';
import { setItems, setStatus } from '../actions/items.actions';
import { errorHandler } from '../reducers/items';

export const requestItems = cargoId => async dispatch => {
    const response = await itemsAPI.getItems(cargoId);
    errorHandler(response.data.result_code, dispatch);
    dispatch(setItems(response.data.data));
};

export const postItems = dictionary => async dispatch => {
    const response = await itemsAPI.postItems(dictionary);
    errorHandler(response.data.result_code, dispatch);
    if (response.data.result_code === 0) {
        dispatch(setStatus('Transaction sent'));
    }
};
