import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {requestPendings} from "../../../redux/pendingsReducer";
import {setStatus} from "../../../redux/itemsReducer";

export const usePendingsHook = (props) => {
    const pendings = useSelector(state => state.pendings.pendings);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        dispatch(setStatus(''))
        dispatch(requestPendings())
        console.log('click');
    }
    return {
        handleSubmit,
        pendings
    }
}



