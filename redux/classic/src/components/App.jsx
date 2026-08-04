import TasksList from "./TasksList";
import {useEffect} from "react";
import {loadTasks} from "../services/tasks/actions";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const {tasks, loading, error } = useSelector(state => state.tasks);

  useEffect(() => {
      dispatch(loadTasks())
  }, []);

  if (loading) {
      return <p>Загрузка...</p>
  }

  if (!loading && error) {
      return <p>Ошибка: {error}</p>
  }

  if (!loading && tasks.length === 0) {
      return <p>Нет задач</p>
  }

  return (
    <div className="page">
      <section className="todolist">
        <TasksList />
      </section>
    </div>
  );
};

export default App;
