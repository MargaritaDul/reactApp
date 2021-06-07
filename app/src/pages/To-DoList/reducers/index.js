import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  tasks: [],
};

const toDoListManagerReducer = handleActions(
  {
    [actions.ADD_TASK]: (state) => {
      const newTask = { taskText: "", isEditMode: false, isComplited: false };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    },
  },
  {
    [actions.WRITE_TASK]: (state, event) => {
      const { value } = event.target;
    },
  },
  defaultState
);

export default toDoListManagerReducer;
