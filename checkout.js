import { cart } from "./cart.js";
import { products } from "./product.js";

const itemContainer = document.querySelector(".items");

itemContainer.innerHTML = "";

cart.forEach((cartItem) => {
  console.log("Cart item:", cartItem);
  console.log("Matching:", matchingProduct);

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
