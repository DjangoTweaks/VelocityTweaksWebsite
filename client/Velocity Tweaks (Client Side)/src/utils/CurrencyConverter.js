

export function CurrencyConverterUSD(currency) {
  return currency.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
