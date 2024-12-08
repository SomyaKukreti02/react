import { useEffect, useState } from "react";
import { InputBox } from "./components";

import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const { currencyOptions, exchangeRates } = useCurrencyInfo(from);

  const convert = (val) => {
    setConvertedAmount(val * exchangeRates[from][to]);
  };

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(0);
    setConvertedAmount(0);
  };

  return (
    <main className="gradient w-full h-screen flex justify-center items-center ">
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-2 border ">
        <div className="gradient rounded-xl p-2 text-white">
          <h1 className="text-xl text-center font-bold">Currency Convertor</h1>
        </div>
        <InputBox
          label={"From"}
          amount={amount}
          selectCurrency={from}
          selectCountry={currencyOptions[from]}
          currencyOptions={currencyOptions}
          onAmountChange={(val) => {
            setAmount(val);
            convert(val);
          }}
          onCurrencyChange={(val) => {
            setFrom(val);
            convert(amount);
          }}
        />
        <div className="relative flex flex-col items-center my-4">
          <hr className="absolute top-1/2 w-full border-dotted" />
          <button
            className="bg-sky-500 py-2 px-4 rounded-lg relative z-10 text-white"
            onClick={swap}
          >
            <i class="fa-solid fa-arrow-up"></i>
            <i class="fa-solid fa-arrow-down"></i>
          </button>
        </div>
        <InputBox
          label={"To"}
          amount={convertedAmount}
          selectCurrency={to}
          selectCountry={currencyOptions[to]}
          currencyOptions={currencyOptions}
          onCurrencyChange={(val) => {
            setTo(val);
            convert(amount);
          }}
          amountDisable={true}
        />
      </div>
    </main>
  );
}

export default App;
