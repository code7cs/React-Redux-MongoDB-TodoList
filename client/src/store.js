import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        payload: action.payload,
      };
    case "ADD_TASK":
      return {
        term: action.term,
      };
    default:
      return state;
  }
}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
