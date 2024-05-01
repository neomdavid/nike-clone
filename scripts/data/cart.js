export let cart;

loadFromStorage();

if (!cart){
  cart = [{
    cartId: '1',
    quantity: 2,
    size: 7,
    variationId: '1-1'
  }, {
    cartId: '2',
    quantity: 1,
    size: 8,
    variationId: '1-2'
  }];
}


export function addToCart(variationId, size) {
  let itemFound = false;

  cart.forEach((cartItem) => {
    if (cartItem.variationId === variationId) {
      if(cartItem.size === size ){
        cartItem.quantity++;
        itemFound = true;
      }
    }
  });

  if (!itemFound) {
    const newItem = {
      cartId: (cart.length === 0 ? '1' : cart.length + 1).toString(),
      quantity: 1,
      size,
      variationId
    };
    cart.push(newItem);
  }

  saveToStorage();
}


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
};
function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
}
