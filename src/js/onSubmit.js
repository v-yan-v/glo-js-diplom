'use strict';

export function onSubmit(event) {
  let messages = {
    sending: '<p>Отправляем данные.</p>',
    success: '<h4>data send</h4>',
    fail: '<h4>send error</h4>'
  };
  let statusMsg = document.createElement('div');
  
  event.preventDefault();
  
  sendFormData(new FormData(event.target))
    .then(() => {
      event.target.appendChild(statusMsg);
      statusMsg.innerHTML = messages.sending;
    })
    .then(() => {
      event.target.closest('.popup-content').innerHTML = messages.success;
    })
    .catch(() => {
      event.target.closest('.popup-content').innerHTML = messages.fail;
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