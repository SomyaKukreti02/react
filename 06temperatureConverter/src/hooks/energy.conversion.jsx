import { useState } from "react";
const useConversion = () => {
  const inputList = ["joule", "kilojoule", "gram-calorie", "kilocalorie"];
  const [inputValue, setInputValue] = useState("joule");
  const [fromUnit, setFromUnit] = useState("joule");
  const [toUnit, setToUnit] = useState("joule");
  const [convertedValue, setConvertedValue] = useState("");

  //Functions to handle conversion logic
  const handleConvert = () => {
    const conversions = {
      joule: 1,
      kilojoule: 0.001,
      "gram-calorie": 0.239006,
      kilocalorie: 0.000239006,
    };

    const inputInJoule = inputValue * conversions[fromUnit];
    const result = inputInJoule / conversions[toUnit];
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
