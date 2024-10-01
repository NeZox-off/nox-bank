export const formatCurrency = (
  value: number,
  currency = "USD",
  transaction = true
) => {
  const formatted = Math.abs(value).toLocaleString("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });

  if (transaction) {
    return value < 0 ? `-${formatted}` : `+${formatted}`;
  } else {
    return `${formatted}`;
  }
};
