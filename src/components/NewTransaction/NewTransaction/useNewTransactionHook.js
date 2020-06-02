import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postItems} from "../../../redux/itemsReducer";

let wif = require('wif');
let elliptic = require('elliptic');
let sha3 = require('js-sha3');
let ec = new elliptic.ec('secp256k1');

export const useTransactionForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const items = useSelector(state => state.items.items);

    function buf2hex(buffer) { // buffer is an ArrayBuffer
        return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
    }


    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs.cargoId, inputs.information, inputs.privateKey);
        let cargoId = inputs.cargoId;
        let information = inputs.information;
        let privateKey = wif.decode(inputs.privateKey);
        console.log(privateKey.privateKey + "decoded wif")
        privateKey = buf2hex(privateKey.privateKey);
        console.log(privateKey);
        let keyPair = ec.keyFromPrivate(privateKey);
        let privKey = keyPair.getPrivate("hex");
        let pubKey = keyPair.getPublic();
        console.log(`Private key: ${privKey}`);
        console.log("Public key :", pubKey.encode("hex"));
        console.log("Public key (compressed):",
            pubKey.encodeCompressed("hex"));
        let string = ("134589037" + '1588410854.301351' + "25" + "cargo_info");
        let msgHash = sha3.keccak256(string);
        let signature = ec.sign(msgHash, privKey, "hex", {canonical: true});
        console.log(`Msg: ${string}`);
        console.log(`Msg hash: ${msgHash}`);
        console.log("Signature:", signature);
        console.log();
        signature = signature.r.toString(16) + signature.r.toString(16);
        console.log(signature);
        // let hexToDecimal = (x) => ec.keyFromPrivate(x, "hex").getPrivate().toString(10);
        // let pubKeyRecovered = ec.recoverPubKey(
        //     hexToDecimal(msgHash), signature, signature.recoveryParam, "hex");
        // console.log("Recovered pubKey:", pubKeyRecovered.encodeCompressed("hex"));
        //
        // let validSig = ec.verify(msgHash, signature, pubKeyRecovered);
        // console.log("Signature valid?", validSig);
        //let timestamp = parseInt((new Date().getTime() / 1000).toFixed(0))
        //timestamp = timestamp.toString()
        //let temperature = '25';
        let dictionary = {
            dictionary: {
                cargo_id: '134589037',
                timestamp: '1588410854.301351',
                temperature: '25',
                information: 'cargo_info',
                public_key: pubKey.encode("hex"),
                signed_hash: signature
            }
        }
        dispatch(postItems(dictionary))
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs,
        items
    };

}



