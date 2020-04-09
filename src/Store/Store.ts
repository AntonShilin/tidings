import { applyMiddleware, combineReducers, createStore } from "redux";
import { stateReducer } from "../Reducers/stateReduser";
import  thunk  from "redux-thunk";


  
const rootReducer = combineReducers({
   data_news: stateReducer
});

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
store.subscribe(() => console.log("Store subscribe", store.getState()));