'use strict';

export function validateTextInput(event) {
  if ((event.target.type !== 'password') && (event.target.name !== 'password') &&
      (event.target.type !== 'tel') && (event.target.name !== 'tel') && (event.target.name !== 'phone') &&
      (event.target.type !== 'email') && (event.target.name !== 'email') &&
      (event.target.tagName !== 'SELECT') && (event.target.type !== 'file') && !event.target.classList.contains('promocode'))
  {
    if (!event.target.oldValue) {event.target.oldValue = '';}
    
    if (event.target.value === '' || (/^[\u0020-\u0040\u005b-\u0060\u007b-\u007e\u0400-\u04ff]+$/gm.test(event.target.value) )) {
      // сработает только на кирилицу(всю) и всякие скобки цифры знаки
      event.target.oldValue = event.target.value;
      event.target.classList.remove('invalid');
    } else {
      event.target.value = event.target.oldValue;
      event.target.classList.add('invalid');
    }
  }
}