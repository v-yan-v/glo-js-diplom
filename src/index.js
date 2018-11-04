'use strict';
import {mainSlider} from "./js/mainSlider";
import {orderDesign} from "./js/orderDesign";
import {orderConsultation} from "./js/orderConsultation";
import {checkSendForm} from "./js/chekAndSendForm";
import {gift} from "./js/gift";
import {moreStylesBlock} from "./js/moreStylesBlocks";
import {mainCalc} from "./js/calc";

document.addEventListener('DOMContentLoaded', ()=>{
  mainSlider();
  orderDesign();
  orderConsultation();
  checkSendForm();
  gift();
  moreStylesBlock();
  mainCalc();
});