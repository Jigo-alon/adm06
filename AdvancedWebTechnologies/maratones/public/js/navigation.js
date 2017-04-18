'use strict';

//Arrow function
(function (d, w) {
  var panel = d.querySelector('.Panel'),
      panelBtn = d.querySelector('.Panel-button'),
      hamburger = d.querySelector('.hamburger'),
      mq = w.matchMedia('(min-width: 64em)');

  panelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    panel.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
  });
})(document, window);