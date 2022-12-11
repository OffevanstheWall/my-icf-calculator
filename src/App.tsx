import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [wallThickness, setWallThickness] = useState(6);
  const [wallHeight, setWallHeight] = useState(8);
  const [wallLinearFt, setWallLinearft] = useState(10);
  const [volume, setVolume] = useState<number | undefined>();

  useEffect(
    function calculateVolume() {
      let cubicFeet = (wallThickness / 12) * wallHeight * wallLinearFt;
      setVolume(cubicFeet);
    },
    [wallHeight, wallThickness, wallLinearFt]
  );

  return (
    <div>
      <div>
        <label htmlFor="concrete-thickness">wall concrete thickness </label>
      </div>
      <select
        id="concrete-thickness"
        value={wallThickness}
        onChange={(e) => {
          setWallThickness(parseInt(e.currentTarget.value, 10));
        }}
      >
        <option value={6}>6"</option>
        <option value={8}>8"</option>
        <option value={10}>10"</option>
        <option value={12}>12"</option>
      </select>
      <div>
        <label htmlFor="wall-height">wall height in feet</label>
      </div>
      <input
        type={"number"}
        min={8}
        value={wallHeight}
        id="wall-height"
        onChange={(e) => {
          setWallHeight(parseInt(e.currentTarget.value));
        }}
      ></input>
      <div>
        <label htmlFor="wall-length">wall linear length in feet</label>
      </div>
      <input
        type={"number"}
        min={0}
        value={wallLinearFt}
        id="wall-length"
        onChange={(e) => {
          setWallLinearft(parseInt(e.currentTarget.value));
        }}
      ></input>
      {/* <button
        onClick={() => {
          calculateVolume();
        }}
      >
        Calculate
      </button> */}
      <div>cubic yards: {volume ? volume / 27 : undefined}</div>
      <div>cubic feet: {volume}</div>
    </div>
  );
}

export default App;
