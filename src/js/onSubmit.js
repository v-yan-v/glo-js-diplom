'use strict';

export function onSubmit(event) {
  let messages = {
    sending: '<p>Отправляем данные.</p>',
    success: '<h4>Спасибо. Мы свяжемся с вами в ближайшее время</h4>',
    fail: '<h4>Ошибка отправки. Попробуйте позже.</h4>'
  };
  
  let popupSendResult  = document.createElement('div');
  popupSendResult.classList.add('popup-consultation');
  popupSendResult.innerHTML = `
      <div class=popup-dialog>
        <button class=popup-close>&times;</button>
        <div class=popup-content></div>
      </div>`;
    
  let statusMsg = document.createElement('div');
  
  document.isAnyButtonPushed = true;
  
  event.preventDefault();
  
  sendFormData(new FormData(event.target))
    .then(() => {
      event.target.appendChild(statusMsg);
      statusMsg.innerHTML = messages.sending;
    })
    .then(() => {
      // console.log(event.target.parentElement.parentElement.parentElement.parentElement);
      event.target.parentElement.parentElement.parentElement.parentElement.dispatchEvent(new Event('click'));
      popupSendResult.getElementsByClassName('popup-content')[0].innerHTML = messages.success;
      document.body.appendChild(popupSendResult);
      popupSendResult.style.display = 'block';
      popupSendResult.addEventListener('click', (evt)=>{
        if (evt.target === popupSendResult || evt.target.classList.contains('popup-close')){
          popupSendResult.remove();
        }
      });
    })
    .catch(() => {
      event.target.parentElement.parentElement.parentElement.parentElement.dispatchEvent(new Event('click'));
      popupSendResult.getElementsByClassName('popup-content')[0].innerHTML = messages.fail;
      document.body.appendChild(popupSendResult);
      popupSendResult.style.display = 'block';
      popupSendResult.addEventListener('click', (evt)=>{
        if (evt.target === popupSendResult || evt.target.classList.contains('popup-close')){
          popupSendResult.remove();
        }
      });
    });
  
  event.target.dispatchEvent(new Event('reset'));
  
  setTimeout(() => {
    statusMsg.innerHTML = '';
    statusMsg.remove();
  }, 5000);
  
  function sendFormData(data) {
    return new Promise((goodNews, badNews) => {
      let request = new XMLHttpRequest();
      
      request.open('POST', 'mailersmart.php');
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      
      request.send(data);
      
      request.addEventListener('readystatechange', () => {
        if (request.readyState < 4) {
          goodNews();
        } else if (request.readyState === 4 && request.status === 200) {
          goodNews();
        } else {
          badNews();
        }
      });
    });
  }
}