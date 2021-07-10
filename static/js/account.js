// index page login signup show hide

let signup = document.getElementById('signup');
let login = document.getElementById('login');

let lgbtn = document.getElementById('login-btn');
lgbtn.addEventListener('click',function toggle(){
    signup.style.display = 'none';
    login.style.display = 'block';
});

let sgbtn = document.getElementById('signup-btn');
sgbtn.addEventListener('click',function toggle(){
    signup.style.display = 'block';
    login.style.display = 'none';
});