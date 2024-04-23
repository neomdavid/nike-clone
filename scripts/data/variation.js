export let variations = [{
  id: '1',
  variationId: '1-1',
  sizes: [
    { size: '7', stock: 12 },
    { size: '7.5', stock: 12 },
    { size: '8', stock: 12 },
    { size: '8.5', stock: 12 },
    { size: '9', stock: 12 },
    { size: '9.5', stock: 12 },
    { size: '10', stock: 12 },
    { size: '10.5', stock: 12 },
    { size: '11', stock: 12 },
  ],
  images: [
    '../../images/men-shoe/variations/men-shoe-1/1.png',
    '../../images/men-shoe/variations/men-shoe-1/2.png',
    '../../images/men-shoe/variations/men-shoe-1/3.png',
    '../../images/men-shoe/variations/men-shoe-1/4.png',
    '../../images/men-shoe/variations/men-shoe-1/5.png',
    '../../images/men-shoe/variations/men-shoe-1/6.png',
    '../../images/men-shoe/variations/men-shoe-1/7.png',
    '../../images/men-shoe/variations/men-shoe-1/8.png',
    '../../images/men-shoe/variations/men-shoe-1/9.png'
  ]
}, {
  id: '2',
  variationId: '1-1',
  sizes: [
    { size: '7', stock: 12 },
    { size: '7.5', stock: 12 },
    { size: '8', stock: 12 },
    { size: '8.5', stock: 12 },
    { size: '9', stock: 12 },
    { size: '9.5', stock: 12 },
    { size: '10', stock: 12 },
    { size: '10.5', stock: 12 },
    { size: '11', stock: 12 },
  ],
  images: [
    '../../images/men-shoe/variations/men-shoe-1/2.png',
    '../../images/men-shoe/variations/men-shoe-1/3.png',
    '../../images/men-shoe/variations/men-shoe-1/4.png',
    '../../images/men-shoe/variations/men-shoe-1/5.png',
    '../../images/men-shoe/variations/men-shoe-1/6.png',
    '../../images/men-shoe/variations/men-shoe-1/7.png',
    '../../images/men-shoe/variations/men-shoe-1/8.png',
    '../../images/men-shoe/variations/men-shoe-1/9.png'
  ]
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
