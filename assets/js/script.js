//login area
const cartLinks = document.querySelectorAll('.loginCart');
const loginArea = document.querySelector('.loginArea');
const overLay = document.querySelector('.overlay');

cartLinks.forEach(cartLink => {
    cartLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginArea.classList.toggle('open');
      overLay.classList.toggle('blur');
    });
  });

overLay.addEventListener("click", function(event) {
    loginArea.classList.remove('open');
    this.classList.remove('blur');
});