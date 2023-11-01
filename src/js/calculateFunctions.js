import { brl, usd, eur, gbp } from "./api";

function fromUSD(to, value) {
  switch (to) {
    case "real":
      return (value * usd.BRL).toFixed(2);
    case "euro":
      return (value * usd.EUR).toFixed(2);
    case "pound":
      return (value * usd.GBP).toFixed(2);
  }
}

function fromEUR(to, value) {
  switch (to) {
    case "real":
      return (value * eur.BRL).toFixed(2);
    case "dollar":
      return (value * eur.USD).toFixed(2);
    case "pound":
      return (value * eur.GBP).toFixed(2);
  }
}

function fromGBP(to, value) {
  switch (to) {
    case "real":
      return (value * gbp.BRL).toFixed(2);
    case "dollar":
      return (value * gbp.USD).toFixed(2);
    case "euro":
      return (value * gbp.EUR).toFixed(2);
  }
}

function fromBRL(to, value) {
  switch (to) {
    case "eur":
      return (value * brl.BRL).toFixed(2);
    case "dollar":
      return (value * brl.USD).toFixed(2);
    case "pound":
      return (value * brl.GBP).toFixed(2);
  }
}

export { fromUSD, fromEUR, fromGBP, fromBRL };
