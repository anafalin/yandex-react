function Boxing() {
  const [isKnockout, setIsKnockout] = React.useState(false);

  function handleClick() {
    setIsKnockout(true);
  }

  return (
    <div>
      {!isKnockout ? (
        <>
          <span>🤨</span>
          <button onClick={handleClick}>Hook!</button>
        </>
      ) : (
        <span>🥴</span>
      )}
      <span>🥊</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Boxing />);
