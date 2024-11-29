//login area
const cartLinks = document.querySelectorAll('.loginCart');
const loginArea = document.querySelector('.loginArea');
const overLay = document.querySelector('.overlay');

cartLinks.forEach(cartLink => {
  cartLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginArea.classList.toggle('open');
    overLay.classList.toggle('blur');
  });
});

overLay.addEventListener("click", function (event) {
  loginArea.classList.remove('open');
  this.classList.remove('blur');
});

//login/signup

const signupArea = document.querySelector('.signUpArea');
const signupButton = document.querySelector('.signupBtn');
const loginAreabtn = document.querySelector('.loginAreaBtn');
const formLogin = document.querySelector('.loginPart');

signupButton.addEventListener("click", function (event) {
  signupArea.classList.add('signupUp');
  formLogin.classList.add('desapear');
});
loginAreabtn.addEventListener("click", function (event) {
  signupArea.classList.remove('signupUp');
  formLogin.classList.remove('desapear');

});