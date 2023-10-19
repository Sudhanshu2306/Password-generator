const passwordBox = document.getElementById("password");
const length = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "@#&*()~%";

const all = upperCase + lowerCase + number + symbol;


function createPassword(){
    let password = "";
                
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += all[Math.floor(Math.random() * all.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

var typed = new Typed('#element', {
    strings: ['Random', 'Strong', 'Unrepeated', 'Secure'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})