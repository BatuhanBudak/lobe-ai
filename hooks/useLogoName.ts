import { useState, useCallback } from "react";

export default function useLogoName() {
  const [textName, setTextName] = useState<string>("Anywhere");
  const [fadeState, setFadeState] = useState(false);

  const changeFadeStatus = useCallback(() => {
    setFadeState(true);
    setTimeout(() => {
      setFadeState(false);
    }, 500);
  }, []);

  function changeTextName(value: string) {
    changeFadeStatus();
    setTextName(value);
  }
  function resetTextName() {
    changeFadeStatus();
    setTextName("Anywhere");
  }

  return [textName, changeTextName, resetTextName, fadeState] as const;
}
