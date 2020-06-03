import React from "react";
import style from "./Pendings.module.css"
import {usePendingsHook} from "./usePendingsHook";
import {Header} from "../../Header/Header";
import Button from "@material-ui/core/Button";

export const PendingsResult = (props) => {
    let a = new Date(props.timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    let information = props.information;
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


export const Pendings = (props) => {
    const {handleSubmit, pendings} = usePendingsHook();
    let pendingsElements = pendings.map(pendings => <PendingsResult cargo_id={pendings.cargo_id}
                                                                    information={pendings.information}
                                                                    public_key={pendings.public_key}
                                                                    signed_hash={pendings.signed_hash}
                                                                    temperature={pendings.temperature}
                                                                    timestamp={pendings.timestamp}
    />)
    return (
        <div>
            <Header/>
            <div className={style.find}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Refresh
                </Button>
                {pendingsElements}
            </div>
        </div>
    )
}
