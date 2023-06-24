import React from "react";
import { HexColorPicker } from "react-colorful";

const Form = ({ addColor }) => {
  const [color, setColor] = React.useState("");
  const [number, setNumber] = React.useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    return addColor({ color: color, number: number });
  };
  return (
    <section className="container">
      <form className="color-form" onSubmit={handleSubmit}>
        <div className="color-picker">
          <HexColorPicker color={color} onChange={setColor} />
          <input
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#000000"
          />
        </div>
        <div className="increment-input">
          <label htmlFor="increment" name="increment">
            increment
          </label>
          <input
            type="number"
            name="increment"
            value={number}
            min="1"
            max="100"
            placeholder="10"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button type="submit" className="generate-btn">
            generate
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
