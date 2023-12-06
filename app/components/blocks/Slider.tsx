"use client";

import React, { useState } from 'react';

function Slider() {
  const [value, setValue] = useState(30); // Initial value

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="range"
        min={10}
        max={50}
        value={value}
        onChange={handleSliderChange}
        step={1}
      />
      <p style={{ marginLeft: '10px' }}>Range: {value}km</p>
    </div>
  );
}

export default Slider;
