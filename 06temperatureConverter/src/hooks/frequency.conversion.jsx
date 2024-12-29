import { useState } from "react";
const useConversion = () => {
  const inputList = ["hertz", "kilohertz", "megahertz", "gigahertz"];
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("hertz");
  const [toUnit, setToUnit] = useState("hertz");
  const [convertedValue, setConvertedValue] = useState("");

  // Conversion logic for frequency
  const handleConvert = () => {
    const conversions = {
      hertz: 1,
      kilohertz: 1000,
      megahertz: 1000000,
      gigahertz: 1000000000,
    };

    const inputInHertz = inputValue * conversions[fromUnit];
    const result = inputInHertz / conversions[toUnit];
    setConvertedValue(result);
  };
  return [
    inputList,
    inputValue,
    setInputValue,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    convertedValue,
    handleConvert,
  ];
};

export default useConversion;
