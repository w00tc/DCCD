import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {requestItems} from "../../../redux/itemsReducer";

export const useFindForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const items = useSelector(state => state.items.items);
    const status = useSelector(state => state.items.status)
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        dispatch(requestItems(inputs.cargoId))
        console.log(inputs.cargoId);
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs,
        items,
        status
    };

}



