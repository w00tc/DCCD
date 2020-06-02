import React from "react";
import style from "./NewTransaction.module.css"
import {Header} from "../../Header/Header";
import {Footer} from "../../Main/Footer/Footer";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {useTransactionForm} from "./useNewTransactionHook";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export const NewTransaction = (props) => {
    const {inputs, handleInputChange, handleSubmit} = useTransactionForm({cargoId: '', privateKey:'', information:'' });
    return (
        <div>
            <Header/>
            <div className={style.find}>
                <form onSubmit={handleSubmit}>
                    <h1>Make your <span>New Transaction</span></h1><br/>
                    <div className={style.field}>
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
                    <TextareaAutosize onChange={handleInputChange} value={inputs.information} className={style.textArea} rowsMin={16} id="information"
                                      label="Information"
                                      name="information"/>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        className={style.field}
                        onChange={handleInputChange}
                        value={inputs.privateKey}
                        id="privateKey"
                        label="WIF-format private key"
                        name="privateKey"
                        autoFocus
                    /><br/>
                </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        SEND
                    </Button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}
