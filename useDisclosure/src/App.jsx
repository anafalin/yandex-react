import { useCallback, useEffect, useState } from "react";
import "./App.css";

const useDisclosure = (initialState = false, { onOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    setIsOpen(initialState);
  }, [initialState]);

  const open = useCallback(() => {
    setIsOpen(true);
    if (typeof onOpen === "function") {
      onOpen();
    }
  }, [onOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    if (typeof onClose === "function") {
      onClose();
    }
  }, [onClose]);

  const toggle = useCallback(() => {
    isOpen ? close() : open();
  }, [isOpen, open, close]);

  return { isOpen, toggle, open, close };
};

function App() {
  const { isOpen, toggle } = useDisclosure(true, {
    onOpen: () => console.log("Open"),
    onClose: () => console.log("Close"),
  });

  return (
    <>
      <button onClick={toggle}>Открыть или закрыть блок с текстом</button>
      {isOpen && (
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
          aspernatur commodi deserunt dolorem, dolores eius eos, error et iusto
          nihil nostrum pariatur reprehenderit sint, tenetur vel vero! Quae,
          quod.
        </h2>
      )}
    </>
  );
}

export default App;
