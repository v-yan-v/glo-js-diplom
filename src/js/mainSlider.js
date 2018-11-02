export function  mainSlider (){
  'use strict';
  let sliderBox   = document.getElementsByClassName('main-slider')[0],
      sliderItems = sliderBox.getElementsByClassName('main-slider-item');
  let i=0;
  
  [].forEach.call(sliderItems, (el,c)=>{
    el.classList.add('slideInDown', 'animated');
    if (c !== 0){
      el.style.display = 'none';
    }
  });

  setInterval(()=>{
    [].forEach.call(sliderItems, (el,j)=>{
      if (j === i){
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
    (i < sliderItems.length-1) ? i++ : i=0;
  }, 5000);

}