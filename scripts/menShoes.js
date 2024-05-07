import {shoes} from './data/shoes.js';
import { variations, updateClickedVariation, getVariationByShoeId} from './data/variation.js';
import { formatCurrency } from './utils/formatCurrency.js';
// Function to log the width of viewport width (vw) unit in pixels
function logViewportWidthInPixels() {
  // Get the current width of the viewport in vw
  const vwWidth = window.innerWidth / 100;
  
  // Calculate the width in pixels
  const widthInPixels = vwWidth * 100;

  // Log the width in pixels
  console.log('Viewport width in pixels:', widthInPixels);
}

// Call the function when the page loads or when needed
logViewportWidthInPixels();

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
      console.log('id'+shoeId)

       let matchedVariation;
    
       matchedVariation = getVariationByShoeId(shoeId);
       
       console.log(matchedVariation.id);
       updateClickedVariation(matchedVariation);
      
    })
  })