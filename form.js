const username = document.getElementById('username');
const password = document.getElementById('password');

const mainForm = document.getElementById('form');
const submitInput = document.getElementById('button');

submitInput.addEventListener('click', handleSubmit(e));