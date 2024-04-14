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
            email: 'martinsadogamhe9@gmail.com',
            password: 'MartinsMITT2024'
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

