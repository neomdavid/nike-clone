export const shoes = [{
  id: '1',
  name: "Nike Air Force 1 '07 LV8",
  description: 'Just In',
  img:'images/men-shoe/men-shoe-1.png',
  colorQuantity: 3,
  priceCents: 68950
}, {
  id: '2',
  name: "Nike Dunk Low Retro",
  description: 'Best Seller',
  img:'images/men-shoe/men-shoe-2.png',
  colorQuantity: 4,
  priceCents: 54950
}, {
  id: '3',
  name: "Nike V2K Run",
  description: 'Just In',
  img:'images/men-shoe/men-shoe-3.png',
  colorQuantity: 2,
  priceCents: 68950
}, {
  id: '4',
  name: "Jordan Nu Retro 1 Low",
  description: 'Just In',
  img:'images/men-shoe/men-shoe-4.png',
  colorQuantity: 4,
  priceCents: 58950
},{
  id: '5',
  name: "Air Jordan 1 Low SE",
  description: 'Just In',
  img:'images/men-shoe/men-shoe-5.png',
  colorQuantity: 1,
  priceCents: 68950
}, {
  id: '6',
  name: "Nike Free Golf NN",
  description: 'Golf Shoes (Wide)',
  img:'images/men-shoe/men-shoe-6.png',
  colorQuantity: 2,
  priceCents: 73950
}, {
  id: '7',
  name: "Jordan Stay Loyal 3",
  description: 'Just In',
  img:'images/men-shoe/men-shoe-7.png',
  colorQuantity: 4,
  priceCents: 63950
}, {
  id: '8',
  name: "Nike Air Max Plus",
  description: 'Just In',
  img:'images/men-shoe/men-shoe-8.png',
  colorQuantity: 1,
  priceCents: 93950
}];

export function getShoeByVariation(variation){
  let matchedShoe;

  shoes.forEach((shoe)=>{
    if(shoe.id === variation.id){
      matchedShoe = shoe;
    }
  });
  return matchedShoe;
}