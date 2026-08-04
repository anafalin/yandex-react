import React from "react";
import { memesList, checkboxesData } from "./data";
import "./app.css";

// Компонент чекбокса
const Checkbox = ({ type = "checkbox", name, onChange }) => (
  <input type={type} name={name} onChange={onChange} />
);

// Компонент ListItem отрисовывает карточку мема
const ListItem = ({ item, onCardClick }) => {
  console.log("Детишки компонента List тоже заново родились!"); // Сообщение появляется при каждом рендере ListItem

  // Передаём в обработчик onCardClick проп item
  const handleClick = () => onCardClick(item);

  return (
    <li onClick={handleClick}>
      {/* Добавляем слушатель onClick */}
      <span>{item.name}</span>
      <img src={item.image} alt={item.name} />
    </li>
  );
};

// Компонент List получает отфильтрованный массив мемов
const List = ({ list }) => {
  console.log("Компонент List заново родился!"); // Сообщение появляется при каждом рендере List

  // БЕЗ useCallback - функция создаётся заново при каждом рендере
  /*
  const handleListItemClick = (item) => {
    console.log(item, "По этому элементу кликнули");
  };
  */
  // ОБЕРНУЛИ В useCallback - теперь функция мемоизирована
  // Новый экземпляр функции будет создан только при изменении зависимостей
  const handleListItemClick = React.useCallback((item) => {
    console.log(item, "По этому элементу кликнули");
  }, []);

  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onCardClick={handleListItemClick} />
      ))}
    </ul>
  );
};

const App = () => {
  // Состояние search - обновляется при нажатии на кнопку поиска
  const [search, setSearch] = React.useState({});
  // Состояние каждого чекбокса
  const [checkboxes, setChecked] = React.useState({});

  const handleCheck = (event) => {
    // Получаем имя и значение checked чекбокса, по которому кликнул пользователь
    const checkboxName = event.target.name;
    const checkboxValue = event.target.checked;

    // Обновляем состояние
    setChecked({
      ...checkboxes,
      [checkboxName]: checkboxValue,
    });
  };

  // При нажатии на кнопку поиска сохраняем в состояние search текущее состояние чекбоксов
  const handleSearch = () => {
    setSearch(checkboxes);
  };

  // Функция фильтрации массива memesList
  /*
  const filteredItems = memesList.filter((meme) => {
    console.log("Меня вызвали!");
    return search[meme.year]; // БЕЗ useMemo - функция вычисляется при КАЖДОМ рендере Это сообщение будет появляться при КАЖДОМ клике по чекбоксу
  });
  */
  // ОБЕРНУЛИ В useMemo - теперь вычисления происходят только при изменении search
  // Функция filteredItems возвращает массив мемов, которые удовлетворяют текущему состоянию search
  const filteredItems = React.useMemo(
    () =>
      memesList.filter((meme) => {
        console.log("Меня вызвали!");
        return search[meme.year]; // БЕЗ useMemo - функция вычисляется при КАЖДОМ рендере Это сообщение будет появляться при КАЖДОМ клике по чекбоксу
      }),
    [search],
  );

  return (
    <div className="App">
      <h1>Мемопедия</h1>

      <div className="filters">
        {checkboxesData.map((item) => (
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} onChange={handleCheck} />
          </label>
        ))}
        {/* По нажатию на чекбокс мы вызываем обновление состояния checkboxes */}

        <button type="button" onClick={handleSearch}>
          Поозорничать
        </button>
        {/* По нажатию на кнопку мы вызываем обновление состояния search */}
      </div>

      <List list={filteredItems} />
      {/* Компонент List отображает результаты поиска */}
    </div>
  );
};

export default App;
