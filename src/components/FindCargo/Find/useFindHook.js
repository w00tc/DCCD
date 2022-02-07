import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../../../redux/actions/items.actions';
import { requestItems } from '../../../redux/thunks/items.thunks';

export const useFindForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const items = useSelector(state => state.items.items);
    const status = useSelector(state => state.items.status);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        dispatch(setStatus(''));
        dispatch(requestItems(inputs.cargoId));
    };
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value
        }));
    };
    return {
        handleSubmit,
        handleInputChange,
        inputs,
        items,
        status
    };

};



