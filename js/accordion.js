'use strict';

//Define zip function 
const zip = (...arrays) => {
  const length = Math.min(...(arrays.map(arr => arr.length)))
  return new Array(length).fill().map((_, i) => arrays.map(arr => arr[i]))
}
// ////////////////////////////////////

const btns = document.querySelectorAll('.accordion__btn');
const panels = document.querySelectorAll('.accordion__body');

const zipped = zip(btns, panels);

zipped.forEach(btnQuestion => {
  let btn = btnQuestion[0];
  let panel = btnQuestion[1];
  btn.addEventListener('click', () => {
    if(panel.style.maxHeight){
      panel.style.maxHeight=null;
    }else{
      panel.style.maxHeight = panel.scrollHeight+"px";
      
    }
  })
})