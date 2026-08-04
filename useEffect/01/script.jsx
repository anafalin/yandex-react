function toggleBackground(shouldShow) {
  document.body.classList.toggle("with-bg", shouldShow);
}

function Beautifier() {
  const [isBeautiful, setIsBeautiful] = React.useState(false);

  React.useEffect(() => {
    toggleBackground(isBeautiful);
  });

  function handleChange() {
    setIsBeautiful(!isBeautiful);
  }

  return (
    <label>
      <input type="checkbox" onChange={handleChange} />
      Включить красивый фон
    </label>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Beautifier />);
