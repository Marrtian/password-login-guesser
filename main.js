let password;
let username;

let passWord = 'thor';
let userName = 'avengers';

document.getElementById('login').onclick = function(){
 password = document.getElementById('password').value;
 username = document.getElementById('username').value;

 if(password == passWord && username == userName){
    document.getElementById('mylbl3').innerHTML = 'correct credentials, Logging in....'
 }
 else if(password == passWord && username != userName){
    document.getElementById('mylbl1').innerHTML = 'username is incorrect\nHint: marvel'
 }
 else if(password != passWord && username == userName){
    document.getElementById('mylbl2').innerHTML = 'password is incorrect\nHint: norse god'
 }
 else{
    document.getElementById('mylbl3').innerHTML = 'password and username are incorrect'
 }
}