async function getCurrency(base) {
  try {
    const result = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${base}`
    );
    const data = await result.json();
    return data.rates;
  } catch (err) {
    console.log(err);
  }
}

const usd = await getCurrency("USD");
const eur = await getCurrency("EUR");
const gbp = await getCurrency("GBP");
const brl = await getCurrency("BRL");

export { usd, eur, gbp, brl };
