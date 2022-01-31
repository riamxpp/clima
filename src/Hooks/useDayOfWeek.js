import { useEffect, useState } from "react";

export default function useDayOfWeek() {
  const [day, setDay] = useState(null);

  useEffect(() => {
    const today = new Date().getDay();
    switch (today) {
      case 0:
        setDay("Domingo");
        break;
      case 1:
        setDay("Segunda");
        break;
      case 2:
        setDay("Terça");
        break;
      case 3:
        setDay("Quarta");
        break;
      case 4:
        setDay("Quinta");
        break;
      case 5:
        setDay("Sexta");
        break;
      case 6:
        setDay("Sábado");
        break;
      default:
        setDay(null);
    }
  }, []);

  return day;
}
