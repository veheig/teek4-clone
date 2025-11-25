import { cart } from "./cart.js";
import { products } from "./product.js";
console.log(cart);

const itemContainer = document.querySelector(".items");

export function displayCart() {
  if (!cart) {
    console.log("cart is empty");
  } else {
    itemContainer.innerHTML = "";
    cart.forEach((cartItem) => {
      console.log("Cart item:", cartItem);

      const matchingProduct = products.find(
        (product) => product.id === cartItem.productId
      );

      if (!matchingProduct) return;

      //   console.log(matchingProducts);

      const productHTML = `
    <div class="products">
        <div class="product-image">
        <img
            src="${matchingProduct.image}"
        />
        </div>
        <div class="product-details">
        <p>
            ${matchingProduct.name}
        </p>
        <div class="product-price">
            <div class="product-increment">
            <span>-</span>
            <span>${cartItem.quantity}</span>
            <span>+</span>
            </div>
            <p>₦${(
              matchingProduct.price * cartItem.quantity
            ).toLocaleString()}</p>
        </div>
        </div>
    </div>
    `;

      itemContainer.innerHTML += productHTML;
    });
  }
}
