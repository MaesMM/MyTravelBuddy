import { useEffect, useState, useRef } from "react";

export default function useClickedOutside1() {
  const target1 = useRef();
  const button1 = useRef();

  const [isShown1, setIsShown1] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside1 = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isShown1 &&
        target1.current &&
        button1.current &&
        !target1.current.contains(e.target) &&
        !button1.current.contains(e.target)
      ) {
        setIsShown1(!isShown1);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside1);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside1);
    };
  }, [isShown1]);

  return { target1, button1, isShown1, setIsShown1 };
}
