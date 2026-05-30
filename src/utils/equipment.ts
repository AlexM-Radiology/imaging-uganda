export function formatProductPrice(
  price: number,
  currency: string | undefined,
  usdToUgx: number,
  defaultCurrency: string,
) {
  const originalCurrency = currency ?? defaultCurrency;

  if (originalCurrency === 'USD') {
    return {
      displayCurrency: 'UGX',
      displayPrice: Math.round(price * usdToUgx),
    };
  }

  return {
    displayCurrency: originalCurrency,
    displayPrice: price,
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
