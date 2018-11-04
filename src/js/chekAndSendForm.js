'use strict';

import {validateTelInput} from "./validateTelInput";
import {onSubmit} from "./onSubmit";

export function checkSendForm(){
  
  [].forEach.call(document.forms, el =>{
    el.addEventListener('input', validateTelInput);
    
    el.addEventListener('submit', onSubmit);
  });
  
}