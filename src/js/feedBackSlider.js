'use strict';

export function feedBackSlider() {
  let sliderBox     = document.getElementsByClassName('feedback-slider')[0],
      sliderItems   = sliderBox.getElementsByClassName('feedback-slider-item'),
      sliderButtons = sliderBox.getElementsByClassName('main-slider-btn');
  let i=0;
  
  [].forEach.call(sliderItems, (el,c)=>{
    el.classList.add('slideInRight', 'animated');
    if (c !== 0){
      el.style.display = 'none';
    }
  });
  
  setInterval(()=>{
    (i+1 < sliderItems.length) ? i++ : i=0;
    [].forEach.call(sliderItems, (el,j)=>{
      if (j === i){
        el.style.display = 'block';
        el.classList.remove('slideInLeft');
        el.classList.add('slideInRight');
      } else {
        el.style.display = 'none';
      }
    });
  }, 15000);
  
  sliderButtons[0].addEventListener('click', ()=>{
    // let t ;
    sliderItems[i].style.display = 'none';
    (i-1 >= 0) ? i-- : i=sliderItems.length-1;
    // t = i;
    sliderItems[i].classList.remove('slideInRight');
    sliderItems[i].classList.add('slideInLeft');
    sliderItems[i].style.display = '';
  });
  
  sliderButtons[1].addEventListener('click', ()=>{
    sliderItems[i].style.display = 'none';
    (i+1 < sliderItems.length) ? i++ : i=0;
    sliderItems[i].classList.remove('slideInLeft');
    sliderItems[i].classList.add('slideInRight');
    sliderItems[i].style.display = '';
  });
}