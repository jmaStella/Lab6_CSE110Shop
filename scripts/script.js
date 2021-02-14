// Script.js
var products = document.getElementById("product-list");
var cartCounts = document.getElementById('cart-count');

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  //localStorage.clear();
  if (!localStorage.getItem("productlist")) {
    localStorage.setItem("cartCounts", cartCounts.innerHTML);
    fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
      .then(data => localStorage.setItem("productlist", JSON.stringify(data)))
      .then(newProduct)
  }else{
    newProduct();
  }

  if(!localStorage.getItem("cartCounts")){
    localStorage.setItem("cartCounts", cartCounts.innerHTML);
  }

  function newProduct(){
    let items = JSON.parse(localStorage.getItem("productlist"));
    for(var i=0; i<items.length; i++){
        let item = new ProductItem(items[i].id, items[i].title, items[i].price, items[i].description, items[i].category, items[i].image);
        products.appendChild(item);
    }
    
  }
});