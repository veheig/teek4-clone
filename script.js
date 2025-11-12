const productContainer = document.querySelector(".main-right");

const products = [
  {
    image:
      "images/Bondi-Sands-Hydra-UV-Protect-SPF-50-Body-Lotion_All_1971_1-500x500.webp",
    brand: "Bondi sands",
    name: "Bondi Sands Hydra UV Protect SPF 50+ Body Lotion 150ml",
    price: 19500,
  },
  {
    image: "images/woo_product_image_ept-5134-image-500x500.png",
    brand: "Zapzyt",
    name: "Zapzyt Acne Treatment Gel 28g",
    price: 9300,
  },
  {
    image: "images/IMG-20251102-WA0004-500x500.jpg",
    brand: "NINE LESS",
    name: "(Mini) Nineless Azelaic Acid Toner 30ml",
    price: 5000,
  },
  {
    image: "images/IMG-20251102-WA0001-500x500.jpg",
    brand: "Celimax",
    name: "(Mini) Celimax Derma Nature Fresh Blackhead Jojoba Cleansing Oil 20ml",
    price: 5000,
  },
];

products.forEach((product) => {
  const productHTML = `
    <div class="product-grid">
    <img
        src="${product.image}"
        alt=""
    />
    <span class="brand">${product.brand}</span>
    <span class="product-name"
        >${product.name}</span
    >
    <span class="product-price">₦${product.price.toLocaleString()}</span>
    <button>ADD TO CART</button>
    </div>
    `;

  productContainer.innerHTML += productHTML;
});
