import React from "react";
import style from "./Find.module.css"
import {Header} from "../../Header/Header";
import {Footer} from "../../Main/Footer/Footer";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {useFindForm} from "./useFindHook";

const FindResult = (props) => {
    let a = new Date(props.timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = "0" + a.getHours();
    let min = "0" + a.getMinutes();
    let sec = "0" + a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour.substr(-2) + ':' + min.substr(-2) + ':' + sec.substr(-2) ;
    return (
        <div className={style.mainResult}>
            <h3>Your CargoId: <p>{props.cargo_id}</p></h3>
            <h3>Information: <p>{props.information}</p></h3>
            <h3>Temperature: <p>{props.temperature}</p></h3>
            <h3>Timestamp: <p>{time}</p></h3>
            <h4>Public Key: <p>{props.public_key}</p></h4>
            <h4>Signed Hash: <p>{props.signed_hash}</p></h4>
        </div>
    )
}
export const Find = (props) => {
    const {inputs, handleInputChange, handleSubmit, items, status} = useFindForm({cargoId: ''});
    let itemsElements = items.map(items => <FindResult cargo_id={items.cargo_id}
                                                       information={items.information}
                                                       public_key={items.public_key}
                                                       signed_hash={items.signed_hash}
                                                       temperature={items.temperature}
                                                       timestamp={items.timestamp}/>
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
                <div className={style.status}>
                    <h2>{status}</h2>
                </div>
                {itemsElements}
            </div>
            <Footer/>
        </div>
    )
}
