function playSound(fileName) {
  const audio = new Audio();
  audio.src = `https://code.s3.yandex.net/web-code/react/${fileName}`;
  audio.play();
}

function App() {
  const [isTimeShown, setIsTimeShown] = React.useState();

  function handleChange() {
    setIsTimeShown(!isTimeShown);
  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange} />
        Включить время (осторожно, звук!)
      </label>
      {isTimeShown && <Time />}
    </>
  );
}

function Time() {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    playSound("gong.mp3");
    const interval = setInterval(() => {
      const date = new Date();
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Код выполнится при изменении seconds
  React.useEffect(() => {
    playSound("tick.mp3");
  }, [seconds]);

  // Код выполнится только при первичном монтировании
  React.useEffect(() => {
    playSound("gong.mp3");
  }, []);

  return (
    <h2>
      {hours}:{minutes}:{seconds}
    </h2>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
