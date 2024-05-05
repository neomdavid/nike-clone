import { renderCartSummary } from "../scripts/cart/cartSummary.js";
import { loadFromStorage } from "../scripts/data/cart.js";

describe('test suite: renderCartSummary', ()=>{
  beforeEach(()=>{
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML=`
      <div class="js-bag-items-container"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        cartId: '1',
        quantity: 2,
        size: 7,
        variationId: '1-1'
      }, {
        cartId: '2',
        quantity: 1,
        size: 8,
        variationId: '1-3'
      }]);
    })
    
    loadFromStorage();

    renderCartSummary();
  });

  it('displays the cart', ()=>{
    expect(
      document.querySelectorAll('.item-container').length).toEqual(2);
    expect(
      document.querySelector('.js-item-container-1').innerText
    ).toContain("Nike Air Force 1 '07 LV8");
    expect(
      document.querySelector('.js-item-container-1').innerText
    ).toContain("Men's Shoes");
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);

   
  });

  afterEach(()=>{
    document.querySelector('.js-test-container').innerHTML=``;
  });
})