// js for nav menu
const hambgr = document.querySelector('.hambgr');
const navMenu = document.querySelector('#navMenu');
const menuClose = document.querySelector('.menu__close');
hambgr.addEventListener('click', () => {
   navMenu.classList.toggle('active');
   menuClose.classList.toggle('active');
})
document.querySelectorAll('.nav__link').forEach(n=> n.addEventListener('click', () => {
   navMenu.classList.remove('active');
   menuClose.classList.remove('active');
}))
menuClose.addEventListener('click', () => {
   navMenu.classList.remove('active');
   menuClose.classList.remove('active');
})

// js for adding active class to the nav menu items
const navbar =  document.querySelector('#navMenu').querySelectorAll("a");
navbar.forEach(element => {
   element.addEventListener('click', function() {
      navbar.forEach(nav=> 
         nav.classList.remove('active')
      )
      this.classList.add("active");
   })
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("stickyLogo").classList.add('active')
   } else {
      document.getElementById("stickyLogo").classList.remove('active')
   }
}

// $("#navMenu a").on('click', function(event) {
//    if (this.hash !== "") {
//    event.preventDefault();
//    var hash = this.hash;
//    $('html, body').animate({
//       scrollTop: $(hash).offset().top - 100
//    }, 1000, function(){
//    });
//    }
// });