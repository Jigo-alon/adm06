const buildify = require('buildify'),
  filesJS = [
    './public/js/navigation.js',
    './public/js/script.js'
  ],
  filesCSS = [
    './public/css/style.css'
  ]

buildify()
  .concat( filesJS )
  .uglify()
  .save( './public/js/script.min.js' )

buildify()
  .concat( filesCSS )
  .cssmin()
  .save( './public/css/style.min.css' )

console.log('Buildify ha terminado de minificar tus archivos CSS y JS')