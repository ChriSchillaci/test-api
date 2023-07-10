const ul = document.querySelector('.scroll-hide');

let prevScrollpos = window.scrollY;
window.onscroll = () => {
let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    ul.style.top = "60px";
  } else {
    ul.style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}