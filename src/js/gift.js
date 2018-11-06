'use strict';

export function gift() {
  document.getElementsByClassName('fixed-gift')[0].addEventListener('click', (evt)=>{
    let popup = document.createElement('div');
    document.isAnyButtonPushed = true;
    
    popup.classList.add('popup-gift');
    popup.innerHTML = `
    <div class=popup-dialog>
      <button class=popup-close>&times;</button>
      <div class=popup-content>
				<h2>У нас для вас есть подарок!</h2>
				<img src="img/gift.png" alt="">
				<p>Введите промо-код IWANTPOPART и получите скидку 30% на портрет любого размера в стиле pop-art!</p>
			</div>
		</div>`;
    
    document.body.appendChild(popup);
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    evt.target.remove();
  
    function closePopup(event){
      if (event.target.classList.contains('popup-close') || event.target === popup){
        popup.removeEventListener('click', closePopup);
        popup.getElementsByClassName('popup-close')[0].removeEventListener('click', closePopup);
        document.body.removeChild(popup);
        document.body.style.overflow = '';
      }
    }
  
    popup.addEventListener('click', closePopup);
    popup.getElementsByClassName('popup-close')[0].addEventListener('click', closePopup);
  });
  
  document.addEventListener('scroll', ()=>{
    if (document.documentElement.scrollTop >= document.documentElement.scrollHeight - document.documentElement.clientHeight){
      if (!document.isAnyButtonPushed && !document.isEndWasReached){
        document.isEndWasReached = true;
        document.getElementsByClassName('fixed-gift')[0].dispatchEvent(new Event('click'));
      }
    }
  });
}