import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {removeTask} from "../services/tasks/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
      dispatch(removeTask(task.id));
  };

  return (
    <article className="todolist__item">
      <span className="todolist__item-text">{task.content}</span>
      <FontAwesomeIcon
        className="todolist__item-del"
        icon={faTrash}
        onClick={handleDelete}
        inverse
      />
    </article>
  );
};

export default Task;
