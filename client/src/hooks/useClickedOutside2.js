import { useEffect, useState, useRef } from "react";

export default function useClickedOutside2() {
  const target2 = useRef();
  const button2 = useRef();

  const [isShown2, setIsShown2] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside2 = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isShown2 &&
        target2.current &&
        button2.current &&
        !target2.current.contains(e.target)
      ) {
        setIsShown2(!isShown2);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside2);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside2);
    };
  }, [isShown2]);

  return { target2, button2, isShown2, setIsShown2 };
}
