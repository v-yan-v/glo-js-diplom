'use strict';
import {mainSlider} from "./js/mainSlider";
import {orderDesign} from "./js/orderDesign";
import {orderConsultation} from "./js/orderConsultation";
import {checkSendForm} from "./js/chekAndSendForm";
import {gift} from "./js/gift";

document.addEventListener('DOMContentLoaded', ()=>{
  mainSlider();
  orderDesign();
  orderConsultation();
  checkSendForm();
  gift();
});