export let variations = [{
  id: '1',
  variationId: '1-1',
  sizes: [
    { menSize:'5.5', womenSize: '7', stock: 12 },
    { menSize:'6', womenSize: '7.5', stock: 12 },
    { menSize:'6.5', womenSize: '8', stock: 12 },
    { menSize:'7', womenSize: '8.5', stock: 12 },
    { menSize:'7.5', womenSize: '9', stock: 12 },
    { menSize:'8', womenSize: '9.5', stock: 12 },
    { menSize:'8.5', womenSize: '10', stock: 12 },
    { menSize:'9', womenSize: '10.5', stock: 12 },
    { menSize:'9.5', womenSize: '11', stock: 12 },
  ],
  images: [
    '../../images/men-shoe/men-shoe-1.png',
    '../../images/men-shoe/variations/men-shoe-1/2.png',
    '../../images/men-shoe/variations/men-shoe-1/3.png',
    '../../images/men-shoe/variations/men-shoe-1/4.png',
    '../../images/men-shoe/variations/men-shoe-1/5.png',
    '../../images/men-shoe/variations/men-shoe-1/6.png',
    '../../images/men-shoe/variations/men-shoe-1/7.png',
    '../../images/men-shoe/variations/men-shoe-1/8.png',
    '../../images/men-shoe/variations/men-shoe-1/9.png'
  ],
  singleImage:'../../images/men-shoe/variations/men-shoe-1/shoe-details-main.png',
  styleCode: 'FN5832-100'
}, {
  id: '2',
  variationId: '1-1',
  sizes: [
    { menSize:'5.5', womenSize: '7', stock: 12 },
    { menSize:'6', womenSize: '7.5', stock: 12 },
    { menSize:'6.5', womenSize: '8', stock: 12 },
    { menSize:'7', womenSize: '8.5', stock: 12 },
    { menSize:'7.5', womenSize: '9', stock: 12 },
    { menSize:'8', womenSize: '9.5', stock: 12 },
    { menSize:'8.5', womenSize: '10', stock: 12 },
    { menSize:'9', womenSize: '10.5', stock: 12 },
    { menSize:'9.5', womenSize: '11', stock: 12 },
  ],
  images: [
    '../../images/men-shoe/men-shoe-2.png',
    '../../images/men-shoe/variations/men-shoe-1/2.png',
    '../../images/men-shoe/variations/men-shoe-1/3.png',
    '../../images/men-shoe/variations/men-shoe-1/4.png',
    '../../images/men-shoe/variations/men-shoe-1/5.png',
    '../../images/men-shoe/variations/men-shoe-1/6.png',
    '../../images/men-shoe/variations/men-shoe-1/7.png',
    '../../images/men-shoe/variations/men-shoe-1/8.png',
    '../../images/men-shoe/variations/men-shoe-1/9.png'
  ],
  singleImage:'../../images/men-shoe/variations/men-shoe-2/shoe-details-main.png',
  styleCode: 'FN5832-100'
}];

export let variationCount = 0;
let clickedVariation;
function saveToStorage() {
  localStorage.setItem('variations', JSON.stringify(variations));
  localStorage.setItem('clickedVariation', JSON.stringify(clickedVariation));
}

loadFromStorage();

function loadFromStorage() {
  clickedVariation = JSON.parse(localStorage.getItem('clickedVariation'));
}

export function updateClickedVariation(variation) {
  clickedVariation = variation;
  saveToStorage();
}

export function getClickedVariation() {
  let variation;
  if (!clickedVariation) {
    clickedVariation = variations[0];
  }
  variation = clickedVariation;
  return variation;
}
