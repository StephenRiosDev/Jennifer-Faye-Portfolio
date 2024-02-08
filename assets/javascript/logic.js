$(document).ready(function(){
    $(this).scrollTop(0);
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
   
    $('.tooltipped').tooltip();
    $('.pushpin').pushpin();

    $('.sidenav').sidenav({
      menuWidth: 300,
      // edge: 'right',
      closeOnClick: true,
      draggable: true
    });
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    // execute navFunction on scroll
    window.onscroll = function(){navFunction()};
    // get navbar
    const navBar = document.getElementById("contents-wrapper");
    // const sideNav = document.getElementById("sidebar-wrapper");
    // get offset position of navbar
    const sticky = navBar.offsetTop;
    // const sideStick = sideNav.offsetTop;

    // reach scroll position - add sticky, leave scroll position - remove sticky
    function navFunction() {
      if (window.scrollY >= sticky) {
        navBar.classList.add("sticky")
      } else {
        navBar.classList.remove("sticky");
      }
      // if (window.scrollY >= sideStick) {
      //   sideNav.classList.add("sideStick")
      // } else {
      //   sideNav.classList.remove("sideStick");
      // }
    }
});