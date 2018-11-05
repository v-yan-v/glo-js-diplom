'use strict';

export function onSizeBlocksHover() {
  // let blocks = document.getElementsByClassName('sizes-block');
  let sizesBlockWrapper = document.getElementsByClassName('sizes-wrapper')[0];
  
  // элемент, внутри которого сейчас курсор
  let currentElem = null;
  
  sizesBlockWrapper.addEventListener('mouseover', function(event) {
    if (currentElem) {
      // перед тем, как зайти в новый элемент, курсор всегда выходит из предыдущего
      // если мы еще не вышли, значит это переход внутри элемента, отфильтруем его
      return;
    }
    
    // посмотрим, куда пришёл курсор
    let target = event.target;
    
    // на нужный элемент ?
    while (target !== this) {
      if (target.classList.contains('sizes-block')){ break; }
      target = target.parentNode;
    }
    if (target === this) return;
    
    // да, элемент перешёл внутрь
    currentElem = target;
    let src = target.getElementsByTagName('img')[0].getAttribute('src');
    src = src.split('.');
    src[src.length-2] = src[src.length-2] + '-1';
    src = src.join('.');
    target.getElementsByTagName('img')[0].setAttribute('src', src);
    [].forEach.call(target.getElementsByTagName('P'), el =>{
      el.style.display = 'none';
    });
  });

  sizesBlockWrapper.addEventListener('mouseout', function(event) {
    // если курсор и так снаружи - игнорируем это событие
    if (!currentElem) return;
    
    // произошёл уход с элемента - проверим, куда, может быть на потомка?
    let relatedTarget = event.relatedTarget;
    if (relatedTarget) { // может быть relatedTarget = null
      while (relatedTarget) {
        // идём по цепочке родителей и проверяем,
        // если переход внутрь currentElem - игнорируем это событие
        if (relatedTarget === currentElem) return;
        relatedTarget = relatedTarget.parentNode;
      }
    }
    
    // произошло событие mouseout, курсор ушёл
    let src = currentElem.getElementsByTagName('img')[0].getAttribute('src');
    src = src.split('.');
    src[src.length-2] = src[src.length-2].slice(0, -2);
    src = src.join('.');
    currentElem.getElementsByTagName('img')[0].setAttribute('src', src);
    [].forEach.call(currentElem.getElementsByTagName('P'), el =>{
      el.style.display = '';
    });
    currentElem = null;
  });
}