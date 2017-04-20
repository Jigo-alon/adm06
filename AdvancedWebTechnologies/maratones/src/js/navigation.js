//Arrow function
((d, w) => {
  const panel = d.querySelector('.Panel'),
    panelBtn = d.querySelector('.Panel-button'),
    hamburger = d.querySelector('.hamburger'),
    mq = w.matchMedia('(min-width: 64em)')

  function closePanel(mq) {
    if (mq.matches) {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    }

    console.log(mq.matches)
  }

  panelBtn.addEventListener('click', e => {
    e.preventDefault()
    panel.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
  });

  mq.addListener(closePanel) //es un manejador que detecta la mq
  closePanel(mq) //la función se ejecuta al cargar el documento
})(document, window);