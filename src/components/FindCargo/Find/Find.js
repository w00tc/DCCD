import React from "react";
import style from "./Find.module.css"
import {Header} from "../../Header/Header";
import {Footer} from "../../Main/Footer/Footer";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {useFindForm} from "./useFindHook";

const FindResult = (props) => {
    return (
        <div className={style.mainResult}>
            <h1>Your CargoId: <p>{props.cargo_id}</p></h1>
            <h3>Timestamp: <p>{props.timestamp}</p></h3>
            <h4>Public Key: <p>{props.public_key}</p></h4>
            <h4>Signed Hash: <p>{props.signed_hash}</p></h4>
        </div>
    )
}
export const Find = (props) => {
    const {inputs, handleInputChange, handleSubmit, items} = useFindForm({cargoId: ''});
    let itemsElements = items.map(items => <FindResult cargo_id={items.cargo_id} timestamp={items.timestamp}
                                                       public_key={items.public_key} signed_hash={items.signed_hash}/>
    )
    return (
        <div>
            <Header/>
            <div className={style.find}>
                <form onSubmit={handleSubmit}>
                    <h1>Find your <span>Cargo Id</span></h1><br/>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        className={style.field}
                        value={inputs.cargoId}
                        onChange={handleInputChange}
                        id="cargoId"
                        label="CargoId"
                        name="cargoId"
                        autoFocus
                    /><br/>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Find
                    </Button>
                </form>
                {itemsElements}
            </div>
            <Footer/>
        </div>
    )
}
