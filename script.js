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
  {
    image: "images/IMG-20251102-WA0003-500x500.jpg",
    brand: "Anua",
    name: "(Mini) ANUA Heartleaf 77% Soothing Toner 40ml",
    price: 3500,
  },
  {
    image: "images/IMG-20251102-WA0002-500x500.jpg",
    brand: "Anua",
    name: "(Mini) Anua Heartleaf Pore Control Cleansing Oil 20ml",
    price: 3500,
  },
  {
    image: "images/WhatsApp-Image-2025-10-27-at-10.42.40_069d66eb-500x500.jpg",
    brand: "Garnier",
    name: "Garnier Micellar Cleansing Water 400ml",
    price: 8999,
  },
  {
    image:
      "images/Replenix-Sensitive-Green-Tea-Gentle-Soothing-Cleanser-200ml_All_1998_1-500x500.jpeg",
    brand: "Replenix",
    name: "Replenix Sensitive Green Tea Gentle Soothing Cleanser 200ml",
    price: 47600,
  },
  {
    image:
      "images/Replenix-Discoloration-Vitamin-C-Pro-Collagen-Serum-30ml_All_2007_1.png",
    brand: "Replenix",
    name: "Replenix Discoloration Vitamin C Pro Collagen Serum 30ml",
    price: 106500,
  },
  {
    image:
      "images/Replenix-Discoloration-Glycolic-Acid-Resurfacing-Cleanser-200ml_All_1999_1-500x500.jpeg",
    brand: "Replenix",
    name: "Replenix Discoloration Glycolic Acid Resurfacing Cleanser 200ml",
    price: 47600,
  },
  {
    image:
      "images/Replenix-Discoloration-Glycolic-Acid-20-Resurfacing-Peel-60-pads_All_2010_1-500x500.jpeg",
    brand: "Replenix",
    name: "Replenix Discoloration Glycolic Acid 20% Resurfacing Peel (60 pads)",
    price: 47600,
  },
];

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
                <button>ADD TO CART</button>
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
