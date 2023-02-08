import { applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import dosReducer from "./dosReducer";

let reducers = combineReducers({
    dos: dosReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;