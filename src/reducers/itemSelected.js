import * as types from "./../constants/ActionTypes";

let defaultState = { id: "", name: "", all: 0, completed: 0, active: 0 };

const itemSelected = (state = defaultState, action) => {
  switch (action.type) {
    case types.SELECTED_ITEM:
      return action.item;
    case types.UNSELECT_ITEM:
      return { id: "", name: "", all: 0, completed: 0, active: 0 };
    default:
      return state;
  }
};

export default itemSelected;
