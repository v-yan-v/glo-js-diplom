'use strict';

export function moreStylesBlock() {
  document.getElementsByClassName('button-styles')[0].addEventListener('click', evt=>{
    let blocks = evt.target.parentNode.getElementsByClassName('styles-2');
  
    evt.target.remove();
    
    [].forEach.call(blocks, (el)=>{
      el.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      el.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'fadeInDown', 'animated');
    });
  });
}