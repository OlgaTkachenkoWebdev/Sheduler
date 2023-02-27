import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    setMode(mode);
    if (replace) {
      setHistory(history)
    } else {
    history.push(mode)
    }
  }

  function back() {
    if (history.length > 1) {
    history.pop();
    const newHistoryLength = history.length;
    const previousMode = history[newHistoryLength - 1]
    setMode(previousMode)
    } else {
      setMode(initial)
    }
  }

  return { 
    mode,
    transition,
    back
   };
}