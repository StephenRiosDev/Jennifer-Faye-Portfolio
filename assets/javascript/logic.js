// $(document).ready(function(){
//     $(this).scrollTop(0);
//     $('.scrollspy').scrollSpy();
//     $('.parallax').parallax();
//     $('.tooltipped').tooltip();
//     $('.pushpin').pushpin();
//     $('.materialboxed').materialbox();
//     $('.sidenav').sidenav({
//       menuWidth: 300,
//       // edge: 'right',
//       closeOnClick: true,
//       draggable: true
//     });
//     $('.carousel.carousel-slider').carousel({
//       fullWidth: true,
//       indicators: true
//     });

    // execute navFunction on scroll
    // window.onscroll = function(){navFunction()};
    // get navbar
    // const navBar = document.getElementById("contents-wrapper");
    // const sideNav = document.getElementById("sidebar-wrapper");
    // get offset position of navbar
    // const sticky = navBar.offsetTop;
    // const sideStick = sideNav.offsetTop;

    // reach scroll position - add sticky, leave scroll position - remove sticky
    // function navFunction() {
    //   if (window.scrollY >= sticky) {
    //     navBar.classList.add("sticky")
    //   } else {
    //     navBar.classList.remove("sticky");
    //   }
      // if (window.scrollY >= sideStick) {
      //   sideNav.classList.add("sideStick")
      // } else {
      //   sideNav.classList.remove("sideStick");
      // }
//     }
// });

// let testimonials = document.querySelectorAll('.testimonial');
//   let currentIndex = 0;
//   testimonials[currentIndex].style.display = 'block';

//   function changeTestimonial(n) {
//     testimonials[currentIndex].style.display = 'none';
//     currentIndex = (currentIndex + n + testimonials.length) % testimonials.length;
//     testimonials[currentIndex].style.display = 'block';
//   }






// $(document).ready(function () {

//   // Scroll to top on page load (optional)
//   $(this).scrollTop(0); // Remove this line if you prefer the page to load at the current scroll position

//   // Materialize CSS Initializations
//   $('.scrollspy').scrollSpy();
//   $('.parallax').parallax();
//   $('.tooltipped').tooltip();
//   $('.pushpin').pushpin();
//   $('.materialboxed').materialbox();

//   // Side Navigation Configuration
//   $('.sidenav').sidenav({
//     menuWidth: 300,
//     closeOnClick: true,
//     draggable: true
//   });

//   // Carousel Initialization
//   $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
//   });

//   // Sticky Navigation Implementation with Initial Display
//   const navbar = $("#contents-wrapper"); // Use jQuery selector for navbar
//   const sticky = navbar.offset().top;

//   function handleStickyNavigation() {
//     if (window.scrollY >= sticky) {
//       navbar.addClass("sticky");
//     } else {
//       navbar.removeClass("sticky");
//     }
//   }

//   // Ensure navbar is visible on initial page load
//   navbar.addClass("sticky"); // Add the "sticky" class initially
//   $(window).scroll(handleStickyNavigation); // Use jQuery scroll event

//   // (Optional) Manual Testimonial Rotation (if not using Materialize CSS)
//   const testimonials = $('.testimonial'); // Use jQuery selector for testimonials
//   let currentIndex = 0;

//   function changeTestimonial(n, testimonials) {
//     testimonials.eq(currentIndex).hide();
//     currentIndex = (currentIndex + n + testimonials.length) % testimonials.length;
//     testimonials.eq(currentIndex).show();
//   }

//   // Call changeTestimonial on initial page load (optional)
//   changeTestimonial(1, testimonials); // Pass testimonials as argument

//   // Add event listeners for arrows (replace with your actual IDs or classes)
//   document.getElementById("next-arrow").addEventListener("click", function() {
//     changeTestimonial(1, testimonials); // Pass testimonials as argument
//   });

//   document.getElementById("prev-arrow").addEventListener("click", function() {
//     changeTestimonial(-1, testimonials); // Pass testimonials as argument
//   });

// });





(function() {

  $(document).ready(function () {

    // Scroll to top on page load (optional)
    $(this).scrollTop(0); // Remove this line if you prefer the page to load at the current scroll position

    // Materialize CSS Initializations
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.pushpin').pushpin();
    $('.materialboxed').materialbox();

    // Side Navigation Configuration
    $('.sidenav').sidenav({
      menuWidth: 300,
      closeOnClick: true,
      draggable: true
    });

    // Carousel Initialization
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    // Sticky Navigation Implementation with Initial Display
    const navbar = $("#contents-wrapper"); // Use jQuery selector for navbar
    const sticky = navbar.offset().top;

    function handleStickyNavigation() {
      if (window.scrollY >= sticky) {
        navbar.addClass("sticky");
      } else {
        navbar.removeClass("sticky");
      }
    }

    // Ensure navbar is visible on initial page load
    navbar.addClass("sticky"); // Add the "sticky" class initially
    $(window).scroll(handleStickyNavigation); // Use jQuery scroll event

    // (Optional) Manual Testimonial Rotation (if not using Materialize CSS)
    const testimonials = $('.testimonial'); // Use jQuery selector for testimonials
    let currentIndex = 0;

    function changeTestimonial(n) {
      testimonials.eq(currentIndex).hide();
      currentIndex = (currentIndex + n + testimonials.length) % testimonials.length;
      testimonials.eq(currentIndex).show();
    }

    // Call changeTestimonial on initial page load (optional)
    changeTestimonial(1);

    // Add event listeners for arrows (replace with YOUR ACTUAL IDs or classes)
    document.querySelectorAll('.prev').forEach(arrow => {
      arrow.addEventListener("click", function() {
        changeTestimonial(-1);
      });
    });

    document.querySelectorAll('.next').forEach(arrow => {
      arrow.addEventListener("click", function() {
        changeTestimonial(1);
      });
    });

  });

})();

