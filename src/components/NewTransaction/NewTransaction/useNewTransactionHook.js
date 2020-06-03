import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postItems, setStatus} from "../../../redux/itemsReducer";
let elliptic = require('elliptic');
let ec = new elliptic.ec('secp256k1');
let secp256k1 = require('secp256k1')
let wif = require('wif');
let sha256 = require('js-sha256');

export const useTransactionForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const [error, setError] = useState('');
    const items = useSelector(state => state.items.items);
    const status = useSelector(state => state.items.status);
    function buf2hex(buffer) { // buffer is an ArrayBuffer
        return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
    }
    let wifError = '';
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setStatus(''))
        setError('');
        console.log(inputs.cargoId, inputs.information, inputs.privateKey);
        let cargoId = inputs.cargoId;
        let information = inputs.information
        if (inputs.information === '') {
            information = 'x80'
        } else {
            information = inputs.information;
        }
        console.log(inputs.privateKey);
        try {
            let privateKey = wif.decode(inputs.privateKey);
            privateKey = buf2hex(privateKey.privateKey);
            let keyPair = ec.keyFromPrivate(privateKey);
            let privKey = keyPair.getPrivate("hex");
            let pubKey = keyPair.getPublic();
            console.log(privateKey);
            console.log(`Private key: ${privKey}`);
            console.log("Public key :", pubKey.encode("hex"));
            console.log("Public key (compressed):",
                pubKey.encodeCompressed("hex"));
            let timestamp = (Math.round((new Date()).getTime() / 1000));
            timestamp = timestamp.toString()
            let temperature = '0'
            let string = (cargoId + timestamp + temperature + information);
            console.log(string);
            let msgHash = sha256(string);
            let hash = Buffer.from(msgHash, 'hex')
            hash = buf2hex(hash);
            hash = sha256(hash);
            hash = Buffer.from(hash, 'hex')
            console.log(hash);
            let priv = Buffer.from(privateKey, 'hex')
            console.log(buf2hex(priv));
            const sigObj = secp256k1.ecdsaSign(hash, priv);
            let final = (buf2hex(sigObj.signature));
            console.log(final);

            let dictionary = {
                dictionary: {
                    cargo_id: cargoId,
                    timestamp: timestamp,
                    temperature: temperature,
                    information: information,
                    public_key: pubKey.encode("hex"),
                    signed_hash: final
                }
            }
            dispatch(postItems(dictionary))
        } catch (e) {
            setError('Invalid WIF-format private key')
        }
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs,
        error,
        items,
        status
    };
}



