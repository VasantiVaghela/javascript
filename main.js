const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// const post = document.querySelector('div');
const button = document.querySelector('button');


// function reqListener() {
//   console.log(this.responseText);
// }

button.addEventListener('click', loadPosts);




function loadPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts" , true);

  xhr.onload = function() {
    if(this.status == 200) {
      let posts = JSON.parse(this.responseText);

      let output = '';
      for(let i in posts) {
        output += 

          ` <h1>${posts[i].title}</h1>
              <p>${posts[i].body}</p>
          `;
      }
      document.querySelector('.post').innerHTML = output;
    }
  }
  xhr.send();

}