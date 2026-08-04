function GoodDeeds() {
  const [deeds, setDeeds] = React.useState([]);

  function handleAddTask(e) {
    const input = e.target.previousSibling;

    setDeeds([...deeds, input.value]);

    input.value = "";
  }

  return (
    <>
      <h3>Мои хорошие поступки</h3>
      <input type="text" placeholder="Поступок" />
      <button onClick={handleAddTask}>Добавить!</button>
      <ol>
        {deeds.map((deed, i) => (
          <li key={i}>{deed}</li>
        ))}
      </ol>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<GoodDeeds />);
