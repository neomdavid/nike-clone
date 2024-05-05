import { getShoeByVariationId } from "../data/shoes.js";
import { getVariationByVariationId } from "../data/variation.js";
import { cart,removeFromCart} from "../data/cart.js";
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderCartSummary(){
  let cartHTML = ``;
  cart.forEach((cartItem)=>{

  const shoe = getShoeByVariationId(cartItem.variationId);
  
  const variation = getVariationByVariationId(cartItem.variationId);
  
  console.log('cartItem'+cartItem.variationId);

  cartHTML+=`
    <div class="item-container js-item-container-${cartItem.cartId}">
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
          <img src="images/nav/delete.png" class="js-delete-icon" data-cart-id="${cartItem.cartId}">
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

document.querySelectorAll('.js-delete-icon').forEach((deleteElement)=>{
  const cartId = deleteElement.dataset.cartId;

  deleteElement.addEventListener('click',()=>{
    removeFromCart(cartId);
    renderCartSummary();
    renderPaymentSummary();
  })

});

function sizesHTML(variation){
  let sizesHTML = ``;
  variation.sizes.forEach((size)=>{
    sizesHTML+=`
    <option value="${size.menSize}">${size.menSize}</option> 
    `
  })
  return sizesHTML;
}
};