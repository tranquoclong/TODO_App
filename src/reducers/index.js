import { combineReducers } from "redux";
import sort from "./sort";
import items from "./items";
import itemSelected from "./itemSelected";

const appReducers = combineReducers({
  sort,
  items,
  itemSelected,
});

export default appReducers;
