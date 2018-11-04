'use strict';

export function validateTelInput(event) {
  if (event.target.tagName === 'INPUT' && (event.target.name === 'phone' || event.target.type === 'tel')){
    if (!event.target.oldValue) {event.target.oldValue = '';}
    
    if (/^\+?[()\d \-]*$/.test(event.target.value) || event.target.value === '') {
      event.target.oldValue = event.target.value;
    } else {
      event.target.value = event.target.oldValue;
    }
  }
}