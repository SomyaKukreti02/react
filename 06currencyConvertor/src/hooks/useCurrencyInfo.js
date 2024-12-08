import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [loading, setLoading] = useState(false);
  const [exchangeRates, setExchangeRates] = useState({}); // exchange rate depending on base currency
  const [currencyOptions, setCurrencies] = useState({}); // all currencies

  useEffect(() => {
    setLoading(true);
    console.log("Fetching COUNTRIES");
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrencies(res);
      });
    setLoading(false);
    // console.log("currencies", currencies);
  }, []); // it only runs when the component page is loaded for the first time

  useEffect(() => {
    setLoading(true);
    console.log("Fetching for", baseCurrency);
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setExchangeRates(res);
      });
    setLoading(false);
    // console.log("exchangeRates", exchangeRates);
  }, [baseCurrency]); // it will run whenever the baseCurrency will change

  return { currencyOptions, exchangeRates, loading };
}
export default useCurrencyInfo;
