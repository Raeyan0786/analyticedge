import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { userDetails } from '../src/reducers/userReducers'
import {userPages} from '../src/reducers/paginationReducers'

const reducer = combineReducers({
    
    user: userDetails,
    userpage:userPages,
 })

 let initialState = {
    
     
 }

 const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;