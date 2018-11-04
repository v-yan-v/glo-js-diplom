'use strict';
import {mainSlider} from "./js/mainSlider";
import {orderDesign} from "./js/orderDesign";
import {orderConsultation} from "./js/orderConsultation";
import {checkSendForm} from "./js/chekAndSendForm";

document.addEventListener('DOMContentLoaded', ()=>{
  mainSlider();
  orderDesign();
  orderConsultation();
  checkSendForm();
});