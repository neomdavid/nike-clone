import { cart } from "./data/cart.js";
import {getShoeByVariationId, shoes} from "./data/shoes.js";
import {getVariationByShoeId} from "./data/variation.js"


let cartHTML = ``;
cart.forEach((cartItem)=>{
  const shoe = getShoeByVariationId(cartItem.variationId);
  console.log(cartItem.variationId);
  const variation = getVariationByShoeId(shoe.id);
 
  cartHTML+=`
    <div class="item-container">
      <div><img src="${variation.squareImage}"></div>
      <div class="item-details-container">
        <div class="shoe-name">${shoe.name}</div>
        <div class="category">Men's Shoes</div>
        <div class="colorway">Sail/Coconut Milk/White/Khaki</div>
        <div class="size-quantity-container">
          <div class="size-container">
            <div>Size</div>
            <form>
              <select name="size" id="size">
               ${sizesHTML(variation)} 
              </select>
            </form>
          </div>
          <div class="quantity-container">
            <div>Quantity</div>
            <form>
              <select name="quantity" id="quantity">
                <option value="1">1</option>    
                <option value="2">2</option>  
                <option value="3">3</option> 
                <option value="1">4</option>    
                <option value="2">5</option>  
                <option value="3">6</option> 
                <option value="1">7</option>    
                <option value="2">8</option>  
                <option value="3">9</option>  
              </select>
            </form>
          </div>
        </div>
        <div class="icons-container">
          <img src="images/nav/heart.png">
          <img src="images/nav/delete.png">
        </div>
      </div>
      <div class="price-container">
        <div>	&#8369;6,895.00</div>
      </div>
    </div>
  `
});

document.querySelector('.js-bag-items-container')
  .innerHTML=' <div class="bag-title">Bag</div>'+cartHTML;

function sizesHTML(variation){
  let sizesHTML = ``;
  variation.sizes.forEach((size)=>{
    sizesHTML+=`
    <option value="${size.menSize}">${size.menSize}</option> 
    `
  })
  return sizesHTML;
}