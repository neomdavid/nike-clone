import { getShoeByVariation, shoes, getShoeByVariationId} from "../../scripts/data/shoes.js";

const variation1 = {
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
    '../../images/men-shoe/variations/men-shoe-1/1-1/2.jpeg',
    '../../images/men-shoe/variations/men-shoe-1/1-1/3.png',
    '../../images/men-shoe/variations/men-shoe-1/1-1/4.png',
    '../../images/men-shoe/variations/men-shoe-1/1-1/5.png',
    '../../images/men-shoe/variations/men-shoe-1/1-1/6.png',
    '../../images/men-shoe/variations/men-shoe-1/1-1/7.png'
  ],
  singleImage:'../../images/men-shoe/variations/men-shoe-1/1-1/shoe-details-main.png',
  styleCode: 'FN5832-101',
  squareImage: '../../images/men-shoe/variations/men-shoe-1/1-1/square-image.png'
};
const shoe1 = {
  id: '1',
  name: "Nike Air Force 1 '07 LV8",
  description: 'Just In',
  img:'images/men-shoe/men-shoe-1.png',
  colorQuantity: 3,
  priceCents: 68950
};

describe('test suite: getShoeByVariation', ()=>{

  it('gets shoe with an existing variation', ()=>{
    expect(getShoeByVariation(variation1)).toEqual(shoe1);
  });
  it('gets shoe with a non-existing variation', ()=>{
    expect(getShoeByVariation('not existing')).toEqual(undefined);
  });
  
});

describe('test suite: getShoeByVariationId',()=>{
  it('gets shoe with an existing variation ID', ()=>{
    expect(getShoeByVariationId('1-1')).toEqual(shoe1);
  });
  it('gets shoe with non-existing variation ID', ()=>{
    expect(getShoeByVariationId('not existing')).toEqual(undefined);
  });
});