import { createStore } from "redux";
import appReducers from "./reducers/index";
import { actSort } from "./actions/index";

const store = createStore(
  appReducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("Inint: ", store.getState());

store.subscribe(() => console.log(store.getState()));

// CHANGE SORT
store.dispatch(actSort("level", "desc"));
console.log("SORT_ITEM: ", store.getState());

export default store;
