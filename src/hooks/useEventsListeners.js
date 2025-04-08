import { useEffect } from "react";
import { queueMove } from "../stores/player";

export default function useEventListeners() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        queueMove("forward");
      } else if (event.key === "ArrowDown") {
        queueMove("backward");
      } else if (event.key === "ArrowLeft") {
        queueMove("left");
      } else if (event.key === "ArrowRight") {
        queueMove("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}