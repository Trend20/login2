const container = document.querySelector('.container');

const loginForm = document.getElementById('login');
const submitBtn = document.getElementById('button');

submitBtn.addEventListener('click', displayHomePage);

function displayHomePage(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <h1>You have logged  in successfully</h1>
      <button id="button">Proceed</button>
    `;
}