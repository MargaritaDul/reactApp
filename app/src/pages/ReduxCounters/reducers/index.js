import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  counters: [],
};

const countersManagerReducer = handleActions(
  {
    [actions.CREATE_COUNTER]: (state) => {
      const newCounter = { countValue: 0 };
      return {
        ...state,
        counters: [...state.counters, newCounter],
      };
    },
    [actions.REMOVE_COUNTER]: (state, { payload }) => {
      const countersCopy = [...state.counters];
      countersCopy.splice(payload, 1);
      return {
        ...state,
        counters: countersCopy,
      };
    },
  },
  defaultState
);

export default countersManagerReducer;
