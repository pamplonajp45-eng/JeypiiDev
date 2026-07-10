import { useEffect, useState, useCallback } from "react";

export default function ClickGlow() {
  const [clicks, setClicks] = useState([]);

  const handleClick = useCallback((e) => {
    const id = Date.now() + Math.random();
    const glow = {
      id,
      x: e.clientX,
      y: e.clientY,
    };
    setClicks((prev) => [...prev, glow]);

    // Remove the glow after animation completes
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== id));
    }, 800);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <>
      {clicks.map((glow) => (
        <span
          key={glow.id}
          className="click-glow"
          style={{
            left: glow.x,
            top: glow.y,
          }}
        />
      ))}
    </>
  );
}
