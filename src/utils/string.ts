export const toCurrency = (price: number, options: Partial<Intl.NumberFormatOptions> = {}) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
    ...options
  }).format(price);
}