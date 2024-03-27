const menuHamburguer = document.querySelector('.hamburguer-menu');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav-links li a');

let header = document.getElementById('header');

menuHamburguer.addEventListener('click', () => {
  nav.classList.toggle('active');
});

links.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('active');
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    header.style.background = '#191919'
  } else {
    header.style.background = 'transparent'
  }

})