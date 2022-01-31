import React, { useState } from "react";
import Input from "./Input";
import style from "./Home.module.css";
import Temperature from "./Temperature";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div className={style.home}>
      <Input
        type="search"
        name="search"
        id="search"
        value={value}
        setValue={setValue}
        placeHolder="Cidade"
        className={style.searchInput}
      />
      <Temperature value={value} />
    </div>
  );
};

export default Home;
