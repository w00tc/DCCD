import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestPendings } from '../../../redux/reducers/pendings';
import { setStatus } from '../../../redux/actions/items.actions';

export const usePendingsHook = (props) => {
    const pendings = useSelector(state => state.pendings.pendings);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        dispatch(setStatus(''));
        dispatch(requestPendings());
        console.log('click');
    };
    return {
        handleSubmit,
        pendings
    };
};



