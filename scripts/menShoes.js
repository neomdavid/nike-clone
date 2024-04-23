import {shoes} from './data/shoes.js';
import { variations, updateClickedVariation} from './data/variation.js';
import { formatCurrency } from './utils/formatCurrency.js';

 
let shoeSummaryHTML = ``;

shoes.forEach((shoe)=>{
  shoeSummaryHTML += `
  <a href="./shoe-details.html"><div class="menshoes-container js-menshoes-container" data-shoe-id="${shoe.id}">
    <div class="image-container">
      <img src="${shoe.img}">
    </div>
    <div class="shoe-details-container">
      <p class="just-in-text">${shoe.description}</p>
      <p class="shoe-name">${shoe.name}</p>
      <p class="shoe-category">Men's Shoes</p>
      <p class="color-quantity">${shoe.colorQuantity} Colour</p>
      <p class="shoe-price">&#8369;${formatCurrency(shoe.priceCents)}</p>
    </div>

  </div></a>
  `
});

document.querySelector('.menshoes-grid')
  .innerHTML = shoeSummaryHTML;

document.querySelectorAll('.js-menshoes-container')
  .forEach((container)=>{
    container.addEventListener('click',()=>{
      const {shoeId} = container.dataset;
      console.log(shoeId);
      

       let matchedVariation;
       variations.forEach((variation)=>{
        if(shoeId == variation.id){
          matchedVariation = variation;
        }
       });
       updateClickedVariation(matchedVariation);
      
    })
  })