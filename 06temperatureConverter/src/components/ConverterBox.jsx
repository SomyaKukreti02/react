import React from "react";

function ConverterBox({
  title = "",
  inputValue,
  setInputValue,
  fromUnit,
  setFromUnit,
  toUnit,
  setToUnit,
  convertedValue,
  handleConvert,
  inputList,
}) {
  return (
    <div className="border rounded-md p-4 mx-auto bg-gray-800 text-white">
      <h1 className="text-3xl mb-4">{title} Converter</h1>
      <div className="my-2">
        <label htmlFor="input-value" className="block mb-1">
          Enter Value:
        </label>
        <input
          type="number"
          id="input-value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded-md text-black"
          placeholder="Enter value to convert"
        />
      </div>
      <div className="my-2">
        <label htmlFor="from-select" className="block mb-1">
          From:
        </label>
        <select
          id="from-select"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="w-full p-2 rounded-md text-black"
        >
          {inputList.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div className="my-2">
        <label htmlFor="to-select" className="block mb-1">
          To:
        </label>
        <select
          id="to-select"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="w-full p-2 rounded-md text-black"
        >
          {inputList.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="mt-4 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Convert
      </button>
      {convertedValue && (
        <div className="mt-4">
          <h2 className="text-xl">Converted Value: {convertedValue}</h2>
        </div>
      )}
    </div>
  );
}

export default ConverterBox;
