import Task from "./Task";
import NewTaskFrom from "./NewTaskForm";
import {useSelector} from "react-redux";
import {getAllTasks, getTasksWithOne} from "../services/tasks/selectors";
import {useMemo} from "react";

const TasksList = () => {
  const projectTasks = useSelector(getTasksWithOne);

  // const tasks = useMemo(() => {
  //     return projectTasks.filter((task) => task.content.includes("1"));
  // }, [projectTasks]);

  return (
    <div className="todolist__list">
      <NewTaskFrom />
      <div className="todolist__tasks">
        {projectTasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;