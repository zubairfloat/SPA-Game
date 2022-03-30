import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useURLState = () => {
  const { search } = useLocation();
  const [state, setState] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(search);
    const newState = {};
    for (const [key, value] of params) {
      if (value === "true") newState[key] = true;
      else if (value === "false") newState[key] = false;
      else if (value === "null") newState[key] = null;
      else if (value === "undefined") newState[key] = undefined;
      else if (value === "NaN") newState[key] = NaN;
      else if (value === "Infinity") newState[key] = Infinity;
      else if (value === "-Infinity") newState[key] = -Infinity;
      else newState[key] = value;
    }
    setState(newState);
  }, [search]);
  return state;
};

export default useURLState;
