import { getShoeByVariationId } from "../data/shoes.js";
import { getVariationByVariationId } from "../data/variation.js";
import { cart } from "../data/cart.js";

export function renderPaymentSummary(){
  let cartSummaryHTML = ``;
  let cartSubtotal = 0;
  let deliveryFee = 0;
  let total = 0;

  cart.forEach((cartItem)=>{
    const shoe = getShoeByVariationId(cartItem.variationId);
    
    const variation = getVariationByVariationId(cartItem.variationId);

    cartSubtotal+=shoe.priceCents;

  });

  total = cartSubtotal + deliveryFee;

  console.log(formatCurrency(cartSubtotal));
  console.log(formatCurrency(total));

  cartSummaryHTML+=`
      <div class="summary-title">Summary</div>
        <div class="subtotal-container">
          <div class="subtotal-title">Subtotal</div>
          <div class="subtotal-price">&#8369;${formatCurrency(cartSubtotal)}</div>
        </div>
        <div class="delivery-container">
          <div class="delivery-title">Estimated Delivery & Handling</div>
          <div class="delivery-value">Free</div>
        </div>
        <div class="total-container">
          <div class="total-title">Total</div>
          <div class="total-price">&#8369;${formatCurrency(total)}</div>
        </div>
        <div class="checkout-button">Guest Checkout</div>
        <div class="checkout-button">Member Checkout</div>
        <div>
      </div>
  `


  document.querySelector('.summary-container')
    .innerHTML = cartSummaryHTML;
};