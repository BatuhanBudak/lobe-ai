import { useCallback, useEffect, useState } from "react";

export default function useScreenSize() {
  const [hasWindow, setHasWindow] = useState(typeof window !== "undefined");
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

  const getWindowWidth = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }, [hasWindow]);

  const handleResize = useCallback(() => {
    setWindowWidth(getWindowWidth);
  }, [getWindowWidth]);

  useEffect(() => {
    setHasWindow(typeof window !== "undefined");
  }, []);

  useEffect(() => {
    if (hasWindow) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasWindow, getWindowWidth, handleResize]);

  return windowWidth;
}
