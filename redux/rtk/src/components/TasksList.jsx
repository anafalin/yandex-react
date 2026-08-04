import Task from "./Task";
import NewTaskFrom from "./NewTaskForm";
import {useGetProjectTasksQuery} from "../services/tasks/api";

const TasksList = () => {
  const {data} = useGetProjectTasksQuery();

  // const tasks = useMemo(() => {
  //     return projectTasks.filter((task) => task.content.includes("1"));
  // }, [projectTasks]);

  return (
    <div className="todolist__list">
      <NewTaskFrom />
      <div className="todolist__tasks">
        {data.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;