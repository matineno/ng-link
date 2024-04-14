// Get HTML element by id
export function getElement(selector, scope = document) {
  return scope.getElementById(selector);
}

// Select HTML element
export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

// Get a list of HTML elements as an array
export function selectAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

// Add event listener
export function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Create HTML element
export function create(element) {
  return document.createElement(element);
}
// Generate random number between - and including - 'min' and 'max'
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Print multiple arguments
export function print(...args) {
  args.forEach(arg => console.log(arg));
}

export function setCookie(name, value, maxAge) {
  const options = {
    path: '/',
    SameSite: 'Lax'
  }

  document.cookie = `${name} = ${value}; path=${options.path}; max-age=${maxAge}; SameSite=${options.SameSite}`;
  return document.cookie;
}

export function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

export function deleteCookie(name) {
  setCookie(name, '', { 'max-age': -1 });
}