import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import itemsReducer from "./itemsReducer";
import pendingsReducer from "./pendingsReducer";

let reducers = combineReducers({
    items:itemsReducer,
    pendings: pendingsReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;
export default store;