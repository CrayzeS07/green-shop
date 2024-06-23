"use client";
import { Slider } from "antd";
import React, { useState } from "react";

interface RangType {
  setRangValue: (value: number[]) => void;
}

export const RangSlider: React.FC<RangType> = ({ setRangValue }) => {
  const [values, setValues] = useState<number[]>([39, 777]);
  const onChangeComplete = (value: number[]) => {
    setValues(value);
    setRangValue(value);
  };

  return (
    <div>
      <div>
        <Slider
          range
          step={1}
          defaultValue={values}
          max={1500}
          min={39}
          onChangeComplete={onChangeComplete}
        />
      </div>
      <div>
        <p>
          <span className="text-[15px] font-normal text-[#3D3D3D] leading-[16px]">
            Price:
          </span>
          <span className="text-[15px] font-bold text-[#46A358] leading-[16px]">
            {Array.isArray(values) ? values[0] : values}$-
          </span>
          <span className="text-[15px] font-bold text-[#46A358] leading-[16px]">
            {Array.isArray(values) ? values[values.length - 1] : values}$
          </span>
        </p>
      </div>
    </div>
  );
};
export default RangSlider;
