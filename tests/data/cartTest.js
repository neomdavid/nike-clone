import { loadFromStorage,addToCart,cart } from "../../scripts/data/cart.js";

describe('test suite: addToCart',()=>{
  it('adds a valid item from an empty cart', ()=>{
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    })
    
    loadFromStorage();

    addToCart('1-2', 8);
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));
  })
});