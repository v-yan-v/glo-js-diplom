'use strict';

export function orderConsultation() {
  let buttons    = document.getElementsByClassName('button-consultation'),
      orderPopup = document.getElementsByClassName('popup-consultation')[0];
  
  [].forEach.call(buttons, el =>{
    el.addEventListener('click', () =>{
      orderPopup.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  orderPopup.addEventListener('click', evt =>{
    evt.preventDefault();
    
    if (evt.target === orderPopup){
      orderPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  
  orderPopup.getElementsByClassName('popup-close')[0].addEventListener('click', ()=>{
    orderPopup.style.display = 'none';
    document.body.style.overflow = '';
  });
}