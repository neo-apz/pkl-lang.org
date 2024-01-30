(function() {
  window.addEventListener("load", () => {
    const navbar = document.getElementsByClassName("navbar")[0];
    const handleScroll = () => {
      let className = navbar.className;
      if (window.scrollY === 0 && className === "navbar") {
        navbar.setAttribute("class", "navbar navbar-top")
      } else if (window.scrollY > 0 && className === "navbar navbar-top") {
        navbar.setAttribute("class", "navbar");
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  });
})();
// Landing page breaks all Anotra UI JS, include the burger button, because it doesn't have a nav item which causes
// site.js to throw and exit before it's had time to set up any handlers.
// Adding a second copy of the burger JS just for the home page will at least ensure people can see and navigate
// links from the landing page on mobile devices.
(function () {
  'use strict'

  var navbarBurger = document.querySelector('.navbar-burger')
  if (!navbarBurger) return
  navbarBurger.addEventListener('click', toggleNavbarMenu.bind(navbarBurger))

  function toggleNavbarMenu (e) {
    e.stopPropagation() // trap event
    document.documentElement.classList.toggle('is-clipped--navbar')
    navbarBurger.setAttribute('aria-expanded', this.classList.toggle('is-active'))
    var menu = document.getElementById(this.getAttribute('aria-controls') || this.dataset.target)
    if (menu.classList.toggle('is-active')) {
      menu.style.maxHeight = ''
      var expectedMaxHeight = window.innerHeight - Math.round(menu.getBoundingClientRect().top)
      var actualMaxHeight = parseInt(window.getComputedStyle(menu).maxHeight, 10)
      if (actualMaxHeight !== expectedMaxHeight) menu.style.maxHeight = expectedMaxHeight + 'px'
    }
  }
})();