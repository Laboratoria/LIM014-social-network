import { createAccount } from '../controler/auth.js';

export default () => {
  const viewHome = `
  <form>
  <p><input type="button" id="return" onclick="location.href='#/login';" value="Return"></p>
  <p><input type="text" id="firstName" placeholder="First Name"></p>
  <p><input type="text" id="lastName" placeholder="Last Name"></p>
  <p><input type="email" id="email" placeholder="Email"></p>
  <p><input type="password" id="txtPass" placeholder="Password"></p>
  <p><button type="submit" id="signUp">Sign Up</button></p>
  </form>
  `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  const datos = divElem.querySelector('#signUp');
  datos.addEventListener('click', () => {
    const email = divElem.querySelector('#email').value;
    const password = divElem.querySelector('#txtPass').value;
    createAccount(email, password).then((result) => console.log('Se registró exitosamente', result));
  });
  return divElem;
};
