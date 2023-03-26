// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// import modules
import { Products } from "./scripts/modules/Products/Products";

// Bisiness logic
document.addEventListener("DOMContentLoaded", async () => {
  let products = new Products();
  products.products = await products.getAllProducts();
  products.drawAllProducts();
  document.querySelector('#count').addEventListener("change", () => {
    products.getInputAndAddToButton();
  })
  const downloadButton = document.querySelector('#downloadButton');
  downloadButton.addEventListener("click", async (e) => {
    e.preventDefault();
    products.products = await products.getLimitedPosts();
    products.drawAllProducts();
  })
});


