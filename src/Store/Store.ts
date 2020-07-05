import { applyMiddleware, combineReducers, createStore } from "redux";
import { stateReducer } from "../Reducers/stateReduser";
import { radioReducer } from "../Reducers/radioReducer";
import  thunk  from "redux-thunk";

  
export const rootReducer = combineReducers({
   data_news: stateReducer,
   radio_vidjet: radioReducer
});

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
store.subscribe(() => console.log("Store subscribe", store.getState()));