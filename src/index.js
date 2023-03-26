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
  });


  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const PRODUCT_ID = btn.getAttribute("data-productId");
      products.products = await products.deleteProductById(products.products, PRODUCT_ID);
      products.drawAllProducts();
    });

  })

  const sortDescBtn = document.querySelector('#btn-sort-desc');
  sortDescBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    products.products = await products.sortProducts("desc");
    products.drawAllProducts();
  });
  const sortAscBtn = document.querySelector('#btn-sort-asc');
  sortAscBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    products.products = await products.sortProducts("asc");
    products.drawAllProducts();
  });

});


