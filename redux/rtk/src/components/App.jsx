import TasksList from "./TasksList";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../services/auth/reducer";
import {nanoid} from "@reduxjs/toolkit";
import {useGetProjectTasksQuery} from "../services/tasks/api";

const App = () => {
  const dispatch = useDispatch();

  const {data: tasks, isLoading, error } = useGetProjectTasksQuery();

  useEffect(() => {
      //dispatch(loadTasks())
      dispatch(setUser({
          name: "Vasya",
          age: 15
      }))
  }, []);

  if (isLoading) {
      return <p>Загрузка...</p>
  }

  if (!isLoading && error) {
      return <p>Ошибка: {error}</p>
  }

  if (!isLoading && tasks.length === 0) {
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
