export function formatProductPrice(
  price: number,
  currency: string | undefined,
  usdToUgx: number,
  defaultCurrency: string,
  discount = 0,
) {
  const originalCurrency = currency ?? defaultCurrency;
  const displayCurrency = originalCurrency === 'USD' ? 'UGX' : originalCurrency;
  const toDisplayCurrency = (amount: number) =>
    originalCurrency === 'USD' ? Math.round(amount * usdToUgx) : amount;

  return {
    displayCurrency,
    displayPrice: toDisplayCurrency(price),
    discountedPrice: discount > 0
      ? toDisplayCurrency(price * (1 - discount / 100))
      : undefined,
  };
}

export function getWhatsAppLink(
  phoneNumber: string,
  title: string,
  price: number,
  currency: string,
  productUrl: string,
) {
  const message = `Hello, I'm interested in purchasing the ${title} (${currency} ${price.toLocaleString()}). \n\nProduct Link: ${productUrl}\n\nCould you please provide more information?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
