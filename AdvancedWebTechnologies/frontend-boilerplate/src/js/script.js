((d, w) => {
  let tecnologia = 'Babel',
    hola = `Hola Mundo con ${tecnologia}`;


  d.addEventListener('DOMContentLoaded', () => {
    let saludo = document.createElement('h2')
    saludo.textContent = hola
    d.body.appendChild(saludo)
    //alert(hola)
  })
})(document, window);