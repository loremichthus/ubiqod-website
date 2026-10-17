(function () {
  // En-tête : bordure au scroll + menu mobile
  var header = document.querySelector('.header');
  var burger = document.querySelector('.burger');
  addEventListener('scroll', function () { header.classList.toggle('scrolled', scrollY > 8); }, { passive: true });
  burger.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();
