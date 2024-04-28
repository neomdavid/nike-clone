import { updateClickedVariation, loadFromStorage, clickedVariation} from "../../scripts/data/variation.js";

describe('test suite: updateClickedVariation', ()=>{
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
  const variation2 = {
    id: '2',
    variationId: '2-1',
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
      '../../images/men-shoe/variations/men-shoe-1/3.jpeg',
      '../../images/men-shoe/variations/men-shoe-1/4.png',
      '../../images/men-shoe/variations/men-shoe-1/5.png',
      '../../images/men-shoe/variations/men-shoe-1/6.png',
      '../../images/men-shoe/variations/men-shoe-1/7.png',
      '../../images/men-shoe/variations/men-shoe-1/8.png',
      '../../images/men-shoe/variations/men-shoe-1/9.png'
    ],
    singleImage:'../../images/men-shoe/variations/men-shoe-2/shoe-details-main.png',
    styleCode: 'FN5832-100'
  };

  beforeEach(()=>{
    spyOn(localStorage, 'setItem');
  })

  it('updates empty clicked variation',()=>{

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify({});
    })
    
    loadFromStorage();

    updateClickedVariation(variation1);
    expect(clickedVariation).toEqual(variation1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('clickedVariation');
    expect(localStorage.setItem).toHaveBeenCalledWith('clickedVariation',JSON.stringify(clickedVariation));
  });

  it('updates not empty clicked variation',()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify(variation1);
    })

    loadFromStorage();
    
    updateClickedVariation(variation2);

    expect(clickedVariation).toEqual(variation2)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('clickedVariation', JSON.stringify(variation2));
    expect(localStorage.getItem).toHaveBeenCalledWith('clickedVariation');
  });
})