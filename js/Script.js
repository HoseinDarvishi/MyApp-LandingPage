let navbar = document.getElementById('navbar');

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 50) {
    navbar.classList.replace('navbar-scrolled-up', 'navbar-scrolled-down');
  } else {
    navbar.classList.replace('navbar-scrolled-down', 'navbar-scrolled-up');
  }
})
document.getElementById('menu-icon').addEventListener("click", () => {
  navbar.classList.toggle("nav-opened");
})

$(".comments").owlCarousel({
  items : 1 ,
  nav : true,
  dots  :false,
  rtl  : true,
  navText : ["<span class = 'bi-arrow-right'></span>" , "<span class='bi-arrow-left'></span>"]
});

$(".imgs-gallery").owlCarousel({
  rtl : true ,
  items : 3 ,
  autoplay : true,
  loop : true ,
  center : true,
  navText : ["<span class = 'bi-arrow-right'></span>" , "<span class='bi-arrow-left'></span>"],
  responsive : {
    0 : {
      items : 1
    } , 
    768 : {
      items : 3
    }
  }
});