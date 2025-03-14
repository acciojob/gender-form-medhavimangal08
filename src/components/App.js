import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [gender, setGender] = useState(false);
  const [size, setSize] = useState("");

  return (
    <div>
      <h2>Select your gender:</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={() => {
            setGender(false);
            setSize("");
          }}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={() => {
            setGender(true);
            setSize("");
          }}
        />
        Female
      </label>

      {gender === false ? (
        <div>
          <label>Select Shirt Size:</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      ) : (
        <div>
          <label>Select Dress Size:</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">--Select--</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default App;
