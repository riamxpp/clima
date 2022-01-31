import React, { useState } from "react";
import useDebouce from "../Hooks/useDebounce";

const Input = ({ type, id, name, value, setValue, placeHolder, className }) => {
  const [displayValue, setDisplayValue] = useState(value);

  const debounceChange = useDebouce(setValue, 500);

  function handleChange({ target }) {
    setDisplayValue(target.value);
    debounceChange(target.value);
  }

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={displayValue}
      onChange={handleChange}
      placeholder={placeHolder}
      className={className}
    />
  );
};

export default Input;
