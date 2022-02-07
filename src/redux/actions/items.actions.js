export const SET_ITEMS = 'SET_ITEMS';
export const SET_STATUS = 'SET_STATUS';

export const setItems = items => ({
    type: SET_ITEMS,
    items,
});
export const setStatus = status => ({
    type: SET_STATUS,
    status,
});
