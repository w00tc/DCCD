import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://tmaslyan.pythonanywhere.com',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export const itemsAPI = {
    getItems (cargoId) {
        console.log(cargoId)
        return instance.get('/find/?cargo_id=' + cargoId)
    },
    postItems(dictionary) {
        console.log(dictionary)
        return instance.post(`/transactions/new`, dictionary)
    }
}