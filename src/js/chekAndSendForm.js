'use strict';

import {validateTelInput} from "./validateTelInput";
import {onSubmit} from "./onSubmit";
import {validateTextInput} from "./validateTextInput";

export function checkSendForm(){
  
  [].forEach.call(document.forms, el =>{
    el.addEventListener('input',(evt)=>{
      validateTelInput(evt);
      validateTextInput(evt);
    });
    el.addEventListener('change',(evt)=>{
      validateTelInput(evt);
      validateTextInput(evt);
    });
    
    el.addEventListener('submit', onSubmit);
  });
  
}