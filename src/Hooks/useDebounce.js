import { useRef } from "react";

export default function useDebouce(fn, delay) {
  const debounceRef = useRef(null);

  function debounce(...args) {
    window.clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounce;
}
