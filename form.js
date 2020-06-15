const username = document.getElementById('username');
const password = document.getElementById('password');

const mainForm = document.getElementById('form');
const submitInput = document.getElementById('button');

submitInput.addEventListener('click', handleSubmit);

 function handleSubmit(e){
  //  preventDefault form behaviour
  e.preventDefault();
  // redirect the user to the welcome page
  window.location.href = "welcome.html";
 }