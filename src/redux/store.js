import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "../redux/rootReducer";

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export { store };
