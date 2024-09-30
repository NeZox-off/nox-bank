export const formatCurrency = (value: number, currency = 'USD') => {
    const formatted = Math.abs(value).toLocaleString('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    });
  
    return value < 0 ? `-${formatted}` : `+${formatted}`;
  };