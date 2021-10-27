import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

//creates store with reducers and an empty object as an intial state
const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;