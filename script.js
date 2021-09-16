// DOM
let tagline = document.querySelector('.tagline');
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav .container')

// Event handler for scrolling.
window.onscroll = function(){
  // Current Y scroll offset
  let windowScroll = this.pageYOffset;

  // Parallax effect for tagline
  tagline.style.transform = `translateY(${windowScroll/10}%)`;
  tagline.style.opacity = `${1 - (windowScroll / 500)}`;
}

hamburger.addEventListener('click', function(){
  nav.classList.toggle('slide');
})