const heading = document.querySelector("h1");
heading.textContent = "Web API example - Local Storage";

//LOCAL STORAGE

localStorage.setItem('name','vasu');
localStorage.getItem('vasu');
localStorage.removeItem('name');

//SESSION STORAGE

sessionStorage.setItem('surname', 'vaghela');
// console.log(sessionStorage.getItem('surname'));
// sessionStorage.removeItem('surname');

sessionStorage.setItem('surname','chavda');  // changing the value of "surname"


//COOKIES

document.cookie = 'name=vasanti; expires=' + new Date(2023, 1, 5).toUTCString()
document.cookie = 'lastname=vaghela; expires=' + new Date(2023, 1, 5).toUTCString()

console.log(document.cookie)