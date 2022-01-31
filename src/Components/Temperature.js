import React, { useEffect, useState } from "react";
import useDayOfWeek from "../Hooks/useDayOfWeek";
import useFetch from "../Hooks/useFetch";
import useHours from "../Hooks/useHours";
import style from "./Temperature.module.css";

const KEY = "key=d6d9027167454ee58f2213717222901";
const API = "http://api.weatherapi.com/v1/current.json?";
// const rest = "&q=parelhas&aqi=no";

const Temperature = ({ value }) => {
  const [date, setDate] = useState(null);
  const [temperatureActive, setTemperatureActive] = useState("celsius");
  const { loading, error, request } = useFetch();
  const { hourTime } = useHours();
  const day = useDayOfWeek();

  useEffect(() => {
    setDate(null);
    async function takeDate() {
      const { json } = await request(`${API}${KEY}&q=${value}&aqi=no`);
      setDate(json);
      return;
    }
    if (value) {
      takeDate();
    }
  }, [value, request]);

  if (loading) return <div className={style.loading}>Loading...</div>;
  if (error) return <div className={style.error}>Error</div>;
  return (
    <section className={style.date}>
      {date ? (
        <div className={style.content}>
          <div className={style.temperature}>
            <img
              src={date.current.condition.icon}
              alt={date.current.condition.text}
            />
            <div className={style.currentTemp}>
              <div>
                <span>
                  {temperatureActive === "celsius"
                    ? date.current.temp_c
                    : date.current.temp_f}
                </span>
              </div>
              <div>
                {" "}
                <button
                  className={`${
                    temperatureActive === "celsius" ? style.buttonActive : ""
                  } ${style.temperatureButton}`}
                  onClick={() => setTemperatureActive("celsius")}
                >
                  °C
                </button>
                <span> | </span>
                <button
                  className={`${
                    temperatureActive === "fahrenheit" ? style.buttonActive : ""
                  } ${style.temperatureButton}`}
                  onClick={() => setTemperatureActive("fahrenheit")}
                >
                  °F
                </button>
              </div>
            </div>
            <div className={style.climate}>
              <span>Vento: {date.current.wind_kph} km/h</span>
              <span>Humidade: {date.current.humidity}%</span>
              <span>Nuvem: {date.current.cloud}%</span>
            </div>
          </div>
          <div className={style.location}>
            <div>
              <h4>{date.location.name}</h4>
              <p>{date.location.region}</p>
              <p>
                {day},
                {hourTime.hours < 10 ? `0${hourTime.hours}` : hourTime.hours}:
                {hourTime.minutes < 10
                  ? `0${hourTime.minutes}`
                  : hourTime.minutes}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.noSearch}>Procure por sua cidade!!</div>
      )}
    </section>
  );
};

export default Temperature;
