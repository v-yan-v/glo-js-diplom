'use strict';

import {validateTelInput} from "./validateTelInput";
import {onSubmit} from "./onSubmit";

export function orderConsultation() {
  let buttons = document.getElementsByClassName('button-consultation');
  let popup   = document.createElement('div');
  
  [].forEach.call(buttons, el =>{
    el.addEventListener('click', () =>{
      popup.classList.add('popup-consultation');
      popup.innerHTML = `
        <div class=popup-dialog>
          <button class=popup-close>&times;</button>
          <div class=popup-content>
            <h4>Остались вопросы? Закажите обратный звонок</h4>
            <div class=main-form>
              <form class="form" action="mailer/smart.php" method="POST">
                <input type=text name=name placeholder="Ваше имя" required>
                <input type=text name=phone placeholder="Ваш телефон" required>
                <!--<button class="button button-order" onclick="yaCounter46630539.reachGoal('btn-consultation'); return true;">Получить консультацию</button>-->
                <button class="button button-order">Получить консультацию</button>
              </form>
            </div>
          </div>
        </div>`;
  
      document.body.appendChild(popup);
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden';
      
      let form = popup.getElementsByTagName('form')[0];
  
      function closePopup(event){
        if (event.target.classList.contains('popup-close') || event.target === popup){
          popup.removeEventListener('click', closePopup);
          popup.getElementsByClassName('popup-close')[0].removeEventListener('click', closePopup);
          form.removeEventListener('input', validateTelInput);
          form.removeEventListener('submit', onSubmit);
          document.body.removeChild(popup);
          document.body.style.overflow = '';
        }
      }
  
      popup.addEventListener('click', closePopup);
      popup.getElementsByClassName('popup-close')[0].addEventListener('click', closePopup);

      form.addEventListener('input', validateTelInput);
      form.addEventListener('submit', onSubmit);
    });
  });
  
  setTimeout(()=>{
    if (!document.body.querySelector('[class^="popup-"')){
      buttons[0].dispatchEvent(new Event('click'));
    }
  }, 60000);
}