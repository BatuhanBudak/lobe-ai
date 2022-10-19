import { useCallback, useEffect, useState } from "react";

export default function useResponsiveNav() {
  const hasWindow = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState<null | number>(null);
  const [navToggled, setNavToggled] = useState(false);
  const desktopScreenWidth = 800;

  const getWindowWidth = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }, [hasWindow]);

  const handleResize = useCallback(() => {
    setWindowWidth(getWindowWidth);
  }, [getWindowWidth]);

  function closeNav() {
    if (windowWidth) {
      if (windowWidth > desktopScreenWidth) return;
      setNavToggled(false);
    }
  }

  function toggleNav() {
    if (windowWidth) {
      if (windowWidth > desktopScreenWidth) return;
      setNavToggled((prev) => !prev);
    }
  }

  useEffect(() => {
    if (hasWindow) {
      handleResize();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasWindow, getWindowWidth, handleResize]);

  return [navToggled, windowWidth, toggleNav, closeNav] as const;
}
