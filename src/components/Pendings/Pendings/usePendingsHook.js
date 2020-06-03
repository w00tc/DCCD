import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {requestPendings} from "../../../redux/pendingsReducer";

export const usePendingsHook = (props) => {
    const pendings = useSelector(state => state.pendings.pendings);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        dispatch(requestPendings())
        console.log('click');
    }
    return {
        handleSubmit,
        pendings
    }
}



