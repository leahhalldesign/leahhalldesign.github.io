import Auth from './auth.js';
import { Errors, makeRequest } from './authHelpers.js';

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
});

const login = document.getElementById('login');
const myErrors = new Errors('errors');
const myAuth = new Auth();

login.addEventListener('touchend', function() {
    myAuth.login(getPosts);
});

async function getPosts() {
    try {
      const data = await makeRequest('posts', 'GET', null, myAuth.token);
      // make sure the element is shown
      var ul = document.getElementById('list');
      ul.innerHTML = '';
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(data[i].title));
        ul.appendChild(li);
      }
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }