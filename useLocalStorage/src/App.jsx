import { useCallback, useEffect, useState } from "react";
import "./App.css";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

function App() {
  const [value, setValue] = useLocalStorage("key1", "");

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input name="someInput" value={value ?? ""} onChange={onInputChange} />
    </>
  );
}

export default App;
