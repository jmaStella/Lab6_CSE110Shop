// <!-- li class="product">
// <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
// <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
// <p class="price">$109.95</p>
// <button onclick="alert('Added to Cart!')">Add to Cart</button>
// </li -->

// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}

class ProductItem extends HTMLElement {
  // TODO
  constructor(item_id, p_title, p_price, description, category, img_src){
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    let cartCounts = document.getElementById('cart-count');
    cartCounts.innerHTML = localStorage.getItem('cartCounts');

    let list = document.createElement('li');
    list.setAttribute('class', 'product');
    shadowDom.appendChild(list);

    let image = document.createElement('img');
    image.src = img_src
    image.setAttribute("class", "img");
    image.setAttribute('alt', p_title);
    image.setAttribute("src", img_src);
    image.setAttribute('width', 200);
    list.appendChild(image);


    let title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML =p_title;
    list.appendChild(title);



    let price = document.createElement('p');
    price.setAttribute('class', 'price');
    price.innerHTML ='$' + p_price;
    list.appendChild(price);



    let button= document.createElement('button');
    button.textContent == "Add to Cart";
    button.onclick = function(){
        if(button.innerHTML == "Add to Cart"){
          button.innerHTML = "Remove from Cart";
          cartCounts.innerHTML+=1;
          localStorage.setItem(item_id,1)
          localStorage.setItem('cartCounts', cartCounts.innerHTML);
        }else{
          button.textContent = "Add to Cart";
          
          localStorage.removeItem(item_id);
          cartCounts.innerHTML-=1
          localStorage.setItem('cartCounts', cartCounts.innerHTML);
        }
    }
    button.textContent = localStorage.getItem(item_id)? "Remove from Cart": "Add to Cart";
    list.appendChild(button);
// 
    
  
    let style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "./styles/styles.css");
    shadowDom.appendChild(style);

    
  }

}

customElements.define('product-item', ProductItem);