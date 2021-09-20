'use strict';

//Define zip function 
const zip = (...arrays) => {
  const length = Math.min(...(arrays.map(arr => arr.length)))
  return new Array(length).fill().map((_, i) => arrays.map(arr => arr[i]))
}
// ////////////////////////////////////

const btns = document.querySelectorAll('.accordion__btn');
const questionBodies = document.querySelectorAll('.accordion__body');

const zipped = zip(btns, questionBodies);

zipped.forEach(btnQuestion => {
  let btn = btnQuestion[0];
  let question = btnQuestion[1];
  btn.addEventListener('click', () => {
    // if(question.style.display == 'none'){
    //   question.style.display = 'block';
    // }else{
    //   let elem = document.activeElement;
    //   elem.blur();
    //   question.style.display = "none";
    // }
    if(question.style.maxHeight){
      question.style.maxHeight=0;
    }else{
      question.style.maxHeight = question.scrollHeight+"px";
    }
  })
})