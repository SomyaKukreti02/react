import { useState } from "react";
const useConversion = () => {
  const inputList = ["celsius", "fahrenheit", "kelvin"];
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("celsius");
  const [convertedValue, setConvertedValue] = useState("");

  // Function to handle conversion logic
  const handleConvert = () => {
    const conversions = {
      celsius: {
        fahrenheit: (celsius) => celsius * (9 / 5) + 32,
        kelvin: (celsius) => celsius + 273.15,
      },
      fahrenheit: {
        celsius: (fahrenheit) => (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit) => (fahrenheit - 32) * (5 / 9) + 273.15,
      },
      kelvin: {
        celsius: (kelvin) => kelvin - 273.15,
        fahrenheit: (kelvin) => (kelvin - 273.15) * (9 / 5) + 32,
      },
    };

    const result = conversions[fromUnit][toUnit](parseFloat(inputValue));
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
