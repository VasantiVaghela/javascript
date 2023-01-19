const input = document.querySelector('input');
const h1 = document.querySelector('h1');

h1.innerHTML = localStorage.getItem('value');
input.addEventListener("keyup", display);

function display (){
  // h1.innerHTML = input.value;
  localStorage.setItem('value', input.value);
  h1.innerHTML = localStorage.getItem('value');
  
}
//  localStorage.clear()  //clear all the data in local storage