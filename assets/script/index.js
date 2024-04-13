import * as utils from './utils.js';
'use strict';

let parsedUserLoginCredentials = {}; // Corrected the variable name

    const loginButton = utils.getElement('login-btn'); // Moved inside the DOMContentLoaded event
    const userEmail = utils.getElement('email'); // Assuming this is the user's email entered in the login form
    const userPassword = utils.getElement('password'); // Assuming this is the user's password entered in the login form
    const formElement = utils.select('form');
    let inputEmail;
    let inputPassword;

    // Check if the data is already stored in local storage
    if (!localStorage.getItem('newuserLoginCredentials')) {
        // If not stored, initialize the data and store it in local storage
        const userLoginCredentials = {
            firstName: 'Martins',
            lastName: 'Adogamhe',
            email: 'admin@nglink.com',
            password: 'admin123!'
        };
        localStorage.setItem('newuserLoginCredentials', JSON.stringify(userLoginCredentials));
        // Set parsedUserLoginCredentials immediately
        parsedUserLoginCredentials = userLoginCredentials;
    } else {
        // If data is already stored, retrieve and parse it from local storage
        parsedUserLoginCredentials = JSON.parse(localStorage.getItem('newuserLoginCredentials'));
    }

    utils.listen('click', loginButton, () => {
      inputEmail = userEmail.value.trim();
      inputPassword = userPassword.value.trim();
      console.log('input is ' + inputEmail);
      console.log('input is ' + inputPassword);
      console.log(parsedUserLoginCredentials.email);
      console.log(parsedUserLoginCredentials.password);
        if (parsedUserLoginCredentials.email.toLowerCase === inputEmail.toLowerCase && parsedUserLoginCredentials.password === inputPassword) {
            window.location.assign('../../home.html'); // Redirect to home page
        } else {
          const wrongLogin = document.createElement('p');
          wrongLogin.textContent = '*Incorrect username or password';  //display incorrect credentials message
          wrongLogin.classList.add('wrong-login');
          formElement.prepend(wrongLogin);
        }
    });



const URL = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';
getUsers(URL);

async function getUsers(endpoint) {
    const options = {
        method: 'GET',
        headers: {  'Content-Type': 'application/JSON; charset=UTF-8'  },
        mode: 'cors'
    }

    try {
      const result = await fetch(endpoint, options);
  
      if (!result.ok) {
        throw new Error(`${result.statusText} (${result.status})`);
      }
  
      const data = await result.json();
      const users = data.results.map(user => ({
        profilePicture: user.picture.large,
        name: `${user.name.first} ${user.name.last}`,
        city: user.location.city
      }));
  
      // Build div elements for each user
        const container = document.getElementById('userContainer');
  
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('add-people-column', 'people-01', 'flex');
        
            const photoDiv = document.createElement('div');
            photoDiv.classList.add('people-photo');
        
            const img = document.createElement('img');
            img.src = user.profilePicture;
        
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('people-info');
        
            const nameh3 = document.createElement('h3');
            nameh3.textContent = user.name;
        
            const cityP = document.createElement('p');
            cityP.textContent = user.city;
        
            const addButtonDiv = document.createElement('div');
            addButtonDiv.classList.add('add-button');
        
            const plusIcon = document.createElement('i');
            plusIcon.classList.add('fa-solid', 'fa-plus');
        
            // Append elements to their respective parents
            photoDiv.appendChild(img);
            infoDiv.appendChild(nameh3);
            infoDiv.appendChild(cityP);
            addButtonDiv.appendChild(plusIcon);
        
            userDiv.appendChild(photoDiv);
            userDiv.appendChild(infoDiv);
            userDiv.appendChild(addButtonDiv);
        
            container.appendChild(userDiv);
        });

    } catch(error) {
      console.log(error.message);
    }
  }