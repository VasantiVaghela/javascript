const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// const post = document.querySelector('div');
const button = document.querySelector('button');


// function reqListener() {
//   console.log(this.responseText);
// }

button.addEventListener('click', loadPosts);

function loadPosts() {

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      return res.json();
    })
    .then(data => {
      let output = '';
      data.forEach(post => {
        output +=

          ` <h1>${post.title}</h1>
              <p>${post.body}</p>
          `;
      }); 
      document.querySelector('.post').innerHTML = output;
    })
    .catch(err => {
      console.log('failed');
    })
  }
  

