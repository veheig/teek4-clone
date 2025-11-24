import { cart, addToCart } from "./cart.js";
import { products } from "./product.js";

const productContainer = document.querySelector(".main-right");

products.forEach((product) => {
  const productHTML = `
    <div class="product-grid">
            <img
              src="${product.image}"
              alt=""
            />
            <div class="details">
              <span class="brand">${product.brand}</span>
              <span class="product-name"
                >${product.name}</span
              >
              <span class="product-price">₦ ${product.price.toLocaleString()}</span>
              <div class="add">
                <div class="plusMinus">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
                <button class = "add-to-cart-js" data-product-id = "${
                  product.id
                }">ADD TO CART</button>
              </div>
            </div>
          </div>
    `;

  productContainer.innerHTML += productHTML;
});

console.log("Accordion script is running");

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((acc) => {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

const cartSideBar = document.querySelector(".cart");
const closeButton = document.querySelector(".close-button");
const openCart = document.querySelector(".cart-container");
const overlay = document.querySelector(".overlay");

closeButton.addEventListener("click", function () {
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
  cartSideBar.style.transform = "translateX(100%)";
});

openCart.addEventListener("click", function () {
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "all";
  cartSideBar.style.transform = "translateX(0)";
});

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

document.querySelectorAll(".add-to-cart-js").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = Number(button.dataset.productId);

    addToCart(productId);
    updateCartQuantity();
  });
});
