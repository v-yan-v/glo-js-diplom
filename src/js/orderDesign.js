'use strict';

import {validateTelInput} from "./validateTelInput";
import {validateTextInput} from "./validateTextInput";
import {onSubmit} from "./onSubmit";

export function orderDesign() {
  let buttons = document.getElementsByClassName('button-design');
  let popup   = document.createElement('div');
  
  [].forEach.call(buttons, el =>{
    el.addEventListener('click', () =>{
      document.isAnyButtonPushed = true;
  
      popup.classList.add('popup-design');
      popup.innerHTML = `
      <div class=popup-dialog>
      <button class=popup-close>&times;</button>
      <div class=popup-content>
				<form action="/" method="POST" enctype="multipart/form-data">
					<h4>Заказать дизайн портрета</h4>
					<div class=file_upload>
						<button type=button>Загрузить фотографию</button>
						<div>Файл не выбран</div>
						<input type=file name=upload>
					</div>
					<div class=main-form>
						<div class=form>
							<input type=text name=name placeholder="Ваше имя" required>
							<input type=text name=phone placeholder="Ваш телефон +7 (999) 999-99-99" required>
							<input type='email' name=email placeholder="Ваш e-mail">
							<textarea name=message placeholder=Комментарий rows=2></textarea>
							<button class="button button-order">Отправить дизайнеру</button>
						</div>
					</div>
				</form>
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
      
      form.addEventListener('input', (evt)=>{
        validateTelInput (evt);
        validateTextInput(evt);
      });
      form.addEventListener('change', (evt)=>{
        validateTelInput (evt);
        validateTextInput(evt);
      });
      form.addEventListener('submit', onSubmit);
    });
  });
}