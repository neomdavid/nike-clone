import {getClickedVariation, variations, getDefaultVariation, getVariationByVariationId} from "./data/variation.js";
import { getShoeByVariation } from "./data/shoes.js";
import { formatCurrency } from "./utils/formatCurrency.js";
import { addToCart, cart} from "./data/cart.js";

let variation = getClickedVariation();
let defaultVariation = getDefaultVariation(variation);
let clickedSize;

renderShoeDetails();

export function renderShoeDetails(){
  let galleryContainerHTML = ``;

  defaultVariation.images.forEach((imageSrc)=>{
    galleryContainerHTML+= `
    <div><img src="${imageSrc}"></div>
    `
  });

  document.querySelector('.js-shoe-gallery-container')
    .innerHTML = galleryContainerHTML;

  document.querySelector('.js-shoe-single-picture-container')
    .innerHTML = `
    <img src="${defaultVariation.singleImage}">
    `;

    let matchedShoe = getShoeByVariation(variation);
  let materialSizeContainerHTML = ``;
  
  materialSizeContainerHTML+=`
   
      <p class="sustainable-materials">Sustainable Materials</p>   
      <p class="shoe-name">${matchedShoe.name}</p>
      <p class="category">Shoes</p>
      <p class="price">&#8369;${formatCurrency(matchedShoe.priceCents)} </p>
      <div class="shoe-variants-container">
       ${shoeVariantsContainerHTML(variation)}
      </div>
      <div class="size-guide-container">
        <div class="select-size js-select-size">Select Size</div>
        <div class="select-guide">Size Guide</div>
      </div>
      <div class="sizes-grid js-sizes-grid">
        ${sizesContainerHTML(variation)}
      </div>
      <div class="add-to-bag js-add-to-bag">Add to Bag</div>
      <div class="favourite">Favourite</div>
      <div class="disclaimer">This product is excluded from site promotions and discounts.</div>
      <div class="recycled">This product is made with at least 20% recycled content by weight.</div>
      <div class="detailed-description">Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort.</div>
      <ul class="color-style-list-container">
        <li>Colour Shown: White/Photon Dust/Summit White/Platinum Tint</li>
        <li>Style: ${defaultVariation.styleCode}</li>
      </ul>
      <div class="view-details">
        <p>View Product Details</p>
      </div>
      <div class="dropdowns-container">
        <div class="dropdown">
          <div class="visible">
            <div>Free Delivery and Returns</div>
            <img src="images/nav/down.png">
          </div>
          <div class="droppable">
            <div>Your order of ₱7,500 or more gets free standard delivery.
            </div>
          <ul>
            <li>Standard delivered 5-9 Business Days
            </li>
            <li>Express delivered 2-4 Business Days
            </li>
          </ul>
          <div>Orders are processed and delivered Monday-Friday (excluding public holidays).
          </div>
          <div>Nike members enjoy <u>free returns</u>. <u>Exclusions apply</u>.
          </div>
          </div> 
        </div>
        <div class="dropdown">
          <div class="visible">
            <div>How This Was Made</div>
            <img src="images/nav/down.png">
          </div>
          <div class="droppable">
          <ul>
            <li>This product was responsibly designed utilising recycled materials from post-consumer and/or post-manufactured waste. One of our biggest steps on our journey to zero carbon and zero waste is in choosing our materials because they account for more than 70% of any product's footprint. By reusing existing plastics, yarns and textiles, we significantly reduce our emissions. Our goal is to use as many recycled materials as possible without compromising on performance, durability and style.
            </li>
            <li>Learn more about our <u>Move to Zero</u> journey towards zero carbon and zero waste, including how we're working to design product with sustainability in mind and help protect the future of where we live and play.
            </li>
          </ul>
          </div> 
        </div>
          <div class="dropdown">
          <div class="visible">
            <div>Reviews</div>
            <img src="images/nav/down.png">
          </div>
          <div class="droppable">
          <ul>
            <li>This product was responsibly designed utilising recycled materials from post-consumer and/or post-manufactured waste. One of our biggest steps on our journey to zero carbon and zero waste is in choosing our materials because they account for more than 70% of any product's footprint. By reusing existing plastics, yarns and textiles, we significantly reduce our emissions. Our goal is to use as many recycled materials as possible without compromising on performance, durability and style.
            </li>
            <li>Learn more about our <u>Move to Zero</u> journey towards zero carbon and zero waste, including how we're working to design product with sustainability in mind and help protect the future of where we live and play.
            </li>
          </ul>
          </div> 
        </div>
      </div>
      

   
  `

  document.querySelector('.js-materials-size-container')
    .innerHTML = materialSizeContainerHTML;

  document.querySelectorAll('.js-variation-image').forEach((variationImage)=>{
    variationImage.addEventListener('click',()=>{
        
      const {variationId} = variationImage.dataset;
      let newVariation;
      newVariation = getVariationByVariationId(variationId);
      updateShoeVariation(newVariation);
    })
  })

};

function sizesContainerHTML(variation){
  let sizesContainerHTML = ``;
  variation.sizes.forEach((object)=>{
    sizesContainerHTML+= `
    <div class="js-size-container" data-size="${object.menSize}">US W ${object.womenSize} / M ${object.menSize}</div>
    `
  });

  return sizesContainerHTML;
};

function shoeVariantsContainerHTML(variation){

  let filteredVariation = variations.filter((variationItem)=>{
    return variationItem.variationId.startsWith(variation.id + '-');
  });

  let shoeVariantsContainerHTML = ``;
  filteredVariation.forEach((variation)=>{
    shoeVariantsContainerHTML+=`
      <img src="${variation.squareImage}" class="js-variation-image" data-variation-id="${variation.variationId}">
    `
  })
  

  return shoeVariantsContainerHTML;
};


function updateShoeVariation(variation){
  defaultVariation = variation;
  renderShoeDetails();
};


document.querySelectorAll('.js-size-container').forEach((sizeContainer)=>{
  const menSize =  sizeContainer.dataset.size;
  sizeContainer.addEventListener('click',()=>{
    clickedSize = menSize;

    if(clickedSize){
      document.querySelector('.js-sizes-grid').style.border='none';
      document.querySelector('.js-select-size').style.color='black';
    }
    document.querySelectorAll('.js-size-container').forEach((container)=>{
      container.style.border = 'solid 1px transparent';
    })
    
    sizeContainer.style.border='solid 1px black';

    console.log(menSize);
  })
});

document.querySelector('.js-add-to-bag').addEventListener('click', (buttonElement)=>{

  if(!clickedSize){
    document.querySelector('.js-sizes-grid').style.border='solid 1px red';
    document.querySelector('.js-select-size').style.color='red';
  } else{
    addToCart(defaultVariation.id, clickedSize);

    console.log(cart);
  }

})