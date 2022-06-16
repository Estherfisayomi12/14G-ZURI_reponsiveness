'use strict';

const form = document.getElementById("form")
const username = document.getElementById("username");
const username2 = document.getElementById("username2");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    // Get the values from the input
    const usernameValue = username.value.trim();
    const username2Value = username2.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    //USERNAME VALIDATION
    if(usernameValue === ''){
        setErrorFor(username, 'First name cannot be empty');
        
    }

    else{
        setSuccessFor(username);
    }

    //USERNAME2 VALIDATION
    if(username2Value === ''){
        setErrorFor(username2, 'Last name cannot be empty');
        
    }

    else{
        setSuccessFor(username2);
    }

    //EMAIL VALIDATION
    if(emailValue === ''){
        setErrorFor(email, 'Looks like this is not an email');
        
    }
    else{
        setSuccessFor(email);
    }

    //password VALIDATION
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty');
        
    }

    else{
        setSuccessFor(password);
    }
    
    
}

function setErrorFor(input, message){
    const inputBox = input.parentElement; //.form-control on html form
    const small = inputBox.querySelector('small');
    
    //add error message inside small
    small.innerText = message;

    //Add error class
    inputBox.className = 'input-box error';
}

function setSuccessFor(input){
    const inputBox = input.parentElement; //.inputBox on html form
   
    //Add error class
    inputBox.className = 'input-box success';
}

