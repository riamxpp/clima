import { useEffect, useState } from "react";

const date = new Date();

export function useDate() {
  const [dataTime, setDataTime] = useState({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDataTime({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return {
    dataTime,
  };
}
