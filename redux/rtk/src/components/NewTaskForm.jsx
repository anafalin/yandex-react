import { useState } from "react";
import {useAddTaskMutation} from "../services/tasks/api";

const NewTaskForm = () => {
  const [inputValue, setInputValue] = useState("");
  //const dispatch = useDispatch();
  const [addTask] = useAddTaskMutation();

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

    // export const logAddTask = (content) => dispatch => {
    //     console.log(`add ${content}`);
    //     dispatch(addTask(content));
    // }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //dispatch(logAddTask(inputValue));
      addTask(inputValue);
  };

  return (
    <form className="todolist__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todolist__form-input"
        placeholder="Введите текст задачи"
        onChange={handleInputChange}
        value={inputValue ?? ""}
      />
      <button type="submit" className="todolist__form-submit">
        Добавить
      </button>
    </form>
  );
};

export default NewTaskForm;
