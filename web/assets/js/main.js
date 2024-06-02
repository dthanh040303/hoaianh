const cartSection = document.querySelector('.cart-section');
const cartIcon = document.getElementById('openCart');
const closeCart = document.querySelector('.cart-close');
const overlay = document.getElementById('overlay');
const accordion = document.querySelectorAll('.accordion');

cartIcon.addEventListener('click', () => {
  cartSection.classList.add('active');
  overlay.classList.add('active');
});

closeCart.addEventListener('click', () => {
  cartSection.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  cartSection.classList.remove('active');
  overlay.classList.remove('active');
});

function handleAccordion() {
  accordion.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
      const panel = item.nextElementSibling;
      panel.style.height = panel.style.height === '0px' ? 'auto' : '0px';
    });
  });
}

handleAccordion();

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 0) {
//     document.querySelector('header').classList.add('fixed');
//   } else {
//     document.querySelector('header').classList.remove('fixed');
//   }
// });
