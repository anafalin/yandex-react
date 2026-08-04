import { useEffect, useRef, useState } from "react";
import "./App.css";
import pyrite from "./assets/pyrite.jpg";

function isFullScreenElement(el) {
  const d = document;
  if (el) {
    return Boolean(
      d.fullscreenElement === el ||
      d.mozFullScreenElement === el ||
      d.webkitFullscreenElement === el ||
      d.msFullscreenElement === el,
    );
  }

  return Boolean(
    d.fullscreenElement ||
    d.mozFullScreenElement ||
    d.webkitFullscreenElement ||
    d.msFullscreenElement ||
    d.fullscreen ||
    d.mozFullScreen ||
    d.webkitIsFullScreen ||
    d.fullScreenMode,
  );
}

const useFullScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const [isFullScreen, setIsFullScreen] = useState(true);
  const ref = useRef(null);

  const openFullScreen = () => {
    const el = ref.current || document.documentElement;

    const requestFullScreen =
      el.webkitRequestFullScreen ||
      el.requestFullscreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullScreen;

    return requestFullScreen.call(el);
  };

  const closeFullScreen = () => {
    const exitFullScreen =
      document.webkitExitFullscreen ||
      document.exitFullscreen ||
      document.mozCancelFullScreen ||
      document.msExitFullscreen;

    return exitFullScreen.call(document);
  };

  const toggleFullScreen = () => {
    isFullScreen ? closeFullScreen() : openFullScreen();
  };

  useEffect(() => {
    setIsFullScreen(isFullScreenElement(ref.current));

    const handleChange = () => {
      setIsFullScreen(isFullScreenElement(ref.current));
    };

    document.addEventListener("webkitfullscreenchange", handleChange, false);
    document.addEventListener("mozfullscreenchange", handleChange, false);
    document.addEventListener("msfullscreenchange", handleChange, false);
    document.addEventListener("MSFullscreenChange", handleChange, false);
    document.addEventListener("fullscreenchange", handleChange, false);

    return () => {
      document.removeEventListener("webkitfullscreenchange", handleChange);
      document.removeEventListener("mozfullscreenchange", handleChange);
      document.removeEventListener("msfullscreenchange", handleChange);
      document.removeEventListener("MSFullscreenChange", handleChange);
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  return {
    ref,
    isFullScreen,
    toggleFullScreen,
    openFullScreen,
    closeFullScreen,
  };
};

function App() {
  const { ref, isFullScreen, toggleFullScreen } = useFullScreen();

  return (
    <>
      <button onClick={toggleFullScreen}>
        {isFullScreen
          ? "Закрыть полноэкранный режим"
          : "Открыть полноэкранный режим"}
      </button>
      <img src={pyrite} ref={ref} alt="pyrite" />
    </>
  );
}

export default App;
