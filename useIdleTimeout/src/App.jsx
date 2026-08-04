import { useCallback, useEffect, useState } from "react";
import "./App.css";

// eslint-disable-next-line no-unused-vars
const useIdleTimeout = (timeout, onTimeout, onActivity) => {
  const fireOnTimeot = useCallback(() => {
    if (typeof onTimeout === "function") {
      onTimeout();
    }
  }, [onTimeout]);

  const fireOnActivity = useCallback(() => {
    if (typeof onActivity === "function") {
      onActivity();
    }
  }, [onActivity]);

  useEffect(() => {
    let timerId;

    const set = () => {
      timerId = setTimeout(fireOnTimeot, timeout);
    };

    set();

    const clear = () => {
      clearTimeout(timerId);
    };

    const resetTimeout = () => {
      clear();
      set();
    };

    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress",
      "touchcancel",
      "touchend",
      "touchmove",
      "touchstart",
    ];

    for (let i = 0; i < events.length; i++) {
      window.addEventListener(events[i], resetTimeout);
      window.addEventListener(events[i], fireOnActivity);
    }

    return () => {
      for (let i = 0; i < events.length; i++) {
        window.removeEventListener(events[i], resetTimeout);
        window.removeEventListener(events[i], fireOnActivity);
      }
    };
  }, [timeout, onTimeout, onActivity]);
};

function App() {
  const [active, setActive] = useState(false);

  const onActivity = () => {
    setActive(true);
  };

  const onTimeout = () => {
    setActive(false);
  };

  useIdleTimeout(3000, onTimeout, onActivity);

  return (
    <>
      <h2>{active && "НЕ ТРОГАЙ МЕНЯ!!!"}</h2>
    </>
  );
}

export default App;
