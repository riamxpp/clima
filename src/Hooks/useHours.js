import { useEffect, useState } from "react";

const date = new Date();

export default function App() {
  const [hourTime, setHourTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setHourTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return {
    hourTime,
  };
}
