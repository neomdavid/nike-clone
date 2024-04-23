import {getClickedVariation} from "./data/variation.js";
 

export function renderShoeDetails(){
  console.log(getClickedVariation());
  let variation = getClickedVariation();

  let variantsContainerHTML = ``;

  variation.images.forEach((imageSrc)=>{
    variantsContainerHTML+= `
    <div><img src="${imageSrc}"></div>
    `
  });
  console.log(variation.id);

  document.querySelector('.js-shoe-gallery-container')
    .innerHTML = variantsContainerHTML;

    console.log(document.querySelector('.js-shoe-gallery-container'));
}
renderShoeDetails();





