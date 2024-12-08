import { useState, useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = {},
  selectCurrency = "usd",
  selectCountry = "US Dollar",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div>
      <div className="flex justify-between my-2 gap-4">
        <label htmlFor={label.toLowerCase()} className="text-white">
          {label}&nbsp;({selectCountry})
        </label>
        <select
          className="rounded-lg px-2 py-1"
          name={`${label.toLowerCase()}-select`}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions &&
            Object.keys(currencyOptions).map((entry) => (
              <option key={useId()} value={entry}>
                {entry}
              </option>
            ))}
        </select>
      </div>
      <div className="">
        <input
          disabled={amountDisable}
          type="number"
          value={amount}
          min={0}
          id={`${label.toLowerCase()}-amount`}
          className="rounded-lg px-2 py-1 w-full"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        ></input>
      </div>
    </div>
  );
}

export default InputBox;
