$(document).ready(function(){
    $(this).scrollTop(0);
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();

// execute navFunction on scroll
window.onscroll = function(){navFunction()};

// get navbar
const navBar = document.getElementById("contents-wrapper");
  
// get offset position of navbar
const sticky = navBar.offsetTop;

// reach scroll position - add sticky, leave scroll position - remove sticky
function navFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}
});