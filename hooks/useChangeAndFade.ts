import { useState, useEffect, useMemo, useCallback } from "react";

export default function useChangeAndFade() {
  const textArray = useMemo(
    () => [
      "identify plants",
      "see gestures",
      "count reps",
      "feel emotions",
      "sense colors",
      "check safety",
    ],
    []
  );
  const [animatedText, setAnimatedText] = useState(textArray[0]);
  const [fadeState, setFadeState] = useState(false);

  const changeFadeStatus = useCallback(() => {
    setFadeState(true);
    setTimeout(() => {
      setFadeState(false);
    }, 400);
  }, []);
  useEffect(() => {
    let index = 0;
    function chooseText() {
      if (index == textArray.length - 1) {
        index = 0;
        setAnimatedText(textArray[0]);
      } else {
        index += 1;
        setAnimatedText(textArray[index]);
      }
    }
    const unsubscribe = setInterval(() => {
      changeFadeStatus();
      chooseText();
    }, 4650);
    return () => {
      clearTimeout(unsubscribe);
    };
  }, [textArray, changeFadeStatus]);

  return [ fadeState, animatedText ] as const;
}
