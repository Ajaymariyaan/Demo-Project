import React, { useState } from "react";
import './Select.css'

function Select() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
        <fieldset>
      <select value={selectedOption} onChange={handleChange}>
        <option className="option1" value="option1">All</option>
        <option  className="option1" value="option2">some </option>
        <option  className="option1" value="option3">some one </option>
      </select>
      <legend>Select Nursery*</legend>
      </fieldset>
     
    </div>
  )
}

export default Select;
