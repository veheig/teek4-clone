export const cart = [];

export function addToCart(productName) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productName === cartItem.productName) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productName: productName,
      quantity: 1,
    });
  }
}
