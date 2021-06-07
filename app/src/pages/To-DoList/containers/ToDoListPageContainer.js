import { useDispatch, useSelector } from "react-redux";

import { useCallback } from "react";
import { ADD_TASK, WRITE_TASK } from "../actions";
import ToDoListLayoutLayout from "../../To-DoList/components/ToDoListLayout";

const ToDoListPageContainer = () => {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.toDoListManager);

  const handleTaskCreate = useCallback(
    (value) => {
      dispatch(ADD_TASK(value));
    },
    [dispatch]
  );

  const handleInputChange = useCallback(
    (event) => {
      dispatch(WRITE_TASK(event));
    },
    [dispatch]
  );

  return (
    <ToDoListLayoutLayout
      handleTaskCreate={handleTaskCreate}
      tasksList={tasks}
      handleInputChange={handleInputChange}
    />
  );
};

export default ToDoListPageContainer;
