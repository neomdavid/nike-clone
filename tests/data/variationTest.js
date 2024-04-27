import { updateClickedVariation, loadFromStorage, clickedVariation} from "../../scripts/data/variation.js";

describe('test suite: updateClickedVariation', ()=>{

  it('updates clicked variation',()=>{
    spyOn(localStorage, 'setItem');

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
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify({});
    })
    
    loadFromStorage();

    updateClickedVariation(variation1);
    expect(clickedVariation).toEqual(variation1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('clickedVariation');
    expect(localStorage.setItem).toHaveBeenCalledWith('clickedVariation',JSON.stringify(clickedVariation));

  })
})