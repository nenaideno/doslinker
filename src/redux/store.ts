import {createStore} from 'redux'
import {combineReducers} from 'redux'

import shortReducer from './shortReducer'

let store: any = createStore(combineReducers({
    short: shortReducer
}))

export default store