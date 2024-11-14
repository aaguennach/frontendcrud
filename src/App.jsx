import React, { useState } from 'react';

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleChange = (e) => {
    const { type, value, checked } = e.target;
    
    if (type === "checkbox") {
      if (checked) {
        setSelectedOptions((prev) => [...prev, value]);
      } else {
        setSelectedOptions((prev) => prev.filter((val) => val !== value));
      }
    } else if (type === "radio") {
      setSelectedRadio(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Radio:", selectedRadio);
    console.log("Selected Options:", selectedOptions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="checkbox" value="option1" onChange={handleChange} /> Option 1
        <input type="checkbox" value="option2" onChange={handleChange} /> Option 2

        <input type="radio" name="radioGroup" value="radio1" onChange={handleChange} /> Radio 1
        <input type="radio" name="radioGroup" value="radio2" onChange={handleChange} /> Radio 2

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
