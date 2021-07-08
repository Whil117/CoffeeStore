/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Category, phrase, slider } from "../../assets/data";
import { SliderImg, SliderMain } from "../../styles/Slider/SliderStyle";

const Slider: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    const isValidCounter =
      count >= slider.length - 1 ? setCount(0) : setCount(count + 1);
    return isValidCounter;
  };
  const handleback = () => {
    const isValidCounter =
      count <= 0 ? setCount(slider.length - 1) : setCount(count - 1);
    return isValidCounter;
  };

  return (
    <>
      <SliderMain>
        <h2>Our coffee’s</h2>
        <SliderImg>
          <button onClick={handleback}>
            <img src="/Images/arrow-left.svg" alt="back" />
          </button>
          <div>
            <h3>{Category.Coffee[count]}</h3>
            <p>{phrase[count]}</p>
            <img src={`/Images/${slider[count]}`} alt={slider[count]} />
          </div>
          <button onClick={handleNext}>
            <img src="/Images/arrow-right.svg" alt="next" />
          </button>
        </SliderImg>
      </SliderMain>
    </>
  );
};

export default Slider;
