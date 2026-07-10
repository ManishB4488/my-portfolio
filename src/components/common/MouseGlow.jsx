import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e) =>
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
      fixed
      pointer-events-none
      w-[420px]
      h-[420px]
      rounded-full
      blur-[130px]
      bg-cyan-500/20
      -z-10
      transition-all
      duration-300
      ease-out
    "
      style={{
        left: position.x - 210,
        top: position.y - 210,
      }}
    />
  );
}

export default MouseGlow;