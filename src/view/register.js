import { createUser, sendEmail, signInWithGoogle, signInWithFacebook } from '../controller/controller-auth.js'

export default () => {
    const viewRegister = `
   <div class= 'whiteBackground'>    
   <div class= 'backgroundRegisterHead'>
   <figure class="figureLogin">
   <a href='#/login' target="_blank"><img src="./img/iziChoice.png" alt="" class='smallLogo'></a>
    </figure></div></br></br>
    <div class='initialP'><p>Crea tu cuenta con</p></div>
    <div class= imagesContainer>
    <div class="option">
    <img src="./icons/facebook-azul.svg" class="facebook" id="btn-facebook">  &nbsp; &nbsp;
    <img src="./icons/google-azul.svg" class="gmail" id="btn-google">       
    </div> <br>
    </div>
    <div class= 'formContainer'>
    <p>ó registrate fácilmente con tus datos:</p></br></br>
        <div class ='formDiv'>
            <form id='registerForm'>
                <label class='registerForm1Label'>Nombres y Apellidos</label></br>
                <input class='registerForm1Input' type='text' id='name' placeholder='Nombres y Apellidos' required> <br></br>
                <label class='registerForm1Label' >Email</label></br>
                <input class='registerForm1Input'  type='text' id='email' placeholder='Email' required> <br></br>
                <label class='registerForm1Label' >Contraseña</label></br>
                <input class='registerForm1Input'  type='password' id='password' placeholder='Contraseña' pattern="[a-zA-Z0-9]{6,20}" required></br></br>
<<<<<<< HEAD
                <input  class='terms' type='checkbox' <label> Acepta términos y condiciones.</label> </br> </br>
                <p id = "error-message"></p><br><br>
                <button class= 'bigButton' type="submit" >Enviar</button> <br><br>
                
 

=======
                <input  class='terms' type='checkbox' required> <label> Acepta términos y condiciones.</label> </br> </br>
                <p id = "error-message"></p><br><br>
                <button class= 'bigButton' type="submit" >Enviar</button> <br><br>
>>>>>>> 71231424d90250b18c07ff8815af43f495b5ed45
            </form>
        </div>
        <div class='goLoginContainer'>
        <p>¿Ya tienes una cuenta? <a href="#/login">Inicia sesión</a></p>
      </div>  
    </div> 
    </div>
    </div>`;
    // COD QUE PERMITE LAS VISTAS: VISTA DE REGISTRO
    const divElement = document.createElement('div');
    divElement.classList.add('mainDiv');
<<<<<<< HEAD
    divElement.innerHTML = viewRegister;

    // const btnBackLogin = divElement.querySelector('.backLogin');
    // btnBackLogin.addEventListener('click', () => { window.location.hash = '#/login'; });
=======
    divElement.innerHTML = viewRegister
>>>>>>> 71231424d90250b18c07ff8815af43f495b5ed45

    // COD PERMITE HACER EL REGISTRO DE USUARIO NUEVO
    const signupForm = divElement.querySelector('#registerForm');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); //cancela el evento de reinicio del formulario
<<<<<<< HEAD
        const name = divElement.querySelector('#name').value;
        const email = divElement.querySelector('#email').value;
        const password = divElement.querySelector('#password').value;

        const error = divElement.querySelector('#error-message');

        createUser(email, password)
=======
        const name = divElement.getElementsById('name').value; //.value porque son inputs
        const email = divElement.getElementsById('email').value;
        const password = divElement.getElementsById('password').value;
        const error = divElement.getElementsById('error-message');
        // FUNCIÓN QUE PERMITE AUTENTIFICAR USUARIO NUEVO CON EMAIL 
        createUser(email, password) // es una función q creamos en base a Firebase 
>>>>>>> 71231424d90250b18c07ff8815af43f495b5ed45
            .then(() => {
                sendEmail() // PERMITE QUE SE ENVIE EL CORREO DE AUT AL USUARIO
                    .then(() => {
                        error.classList.add('successful-message');
                        error.textContent = 'Por favor revise su bandeja de entrada para verificar su cuenta';
                    })
                    .catch((err) => {
                        error.classList.add('error-message');

                        error.textContent = err.message;
<<<<<<< HEAD
                        
=======

>>>>>>> 71231424d90250b18c07ff8815af43f495b5ed45
                    });
                signupForm.reset();
            })
            .catch((err) => {
                error.classList.remove('successful-message');
                error.classList.add('error-message');
<<<<<<< HEAD
                switch(err.message){
                    case 'The email address is already in use by another account.':
                        error.textContent = 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.';
                }
                // error.textContent = err.message;
=======
                switch (err.message) {
                    case 'The email address is already in use by another account.':
                        error.textContent = 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.';
                }
>>>>>>> 71231424d90250b18c07ff8815af43f495b5ed45
                setTimeout(() => {
                    error.textContent = '';
                }, 4000);
                console.log(err.message)
            });
    });
    return divElement;
};