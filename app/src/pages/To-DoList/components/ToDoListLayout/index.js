import ToDoListItem from "../ToDoListItem";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const ToDoListLayout = ({ handleTaskCreate, tasksList, handleInputChange }) => {
  return (
    <div>
      <div>
        <Input
          value={tasksList}
          name="taskText"
          type="text"
          placeholder="WRITE TASK"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Button
          onClick={handleTaskCreate}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
      <div>
        {tasksList.map((task, index) => {
          return (
            <div>
              <ToDoListItem taskValue={task.taskText} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoListLayout;
