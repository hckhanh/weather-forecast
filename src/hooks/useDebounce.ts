import { useEffect, useState } from "react";

function useDebounce<T = unknown>(value: T, delay: number): T | null {
  const [debouncedValue, updateDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      updateDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
