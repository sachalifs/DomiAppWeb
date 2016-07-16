var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/login', function (ctx, next) { 
  title('Domilogistica - Logueate');
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
//gracias a empty despues de llevarnos el hipervinculo a alguna vista deja de mostrarnos la ruta hipervinculada (seguridad), igualmente,  
//el appendChild nos lleva al archivo template.js que se encuentra en el mismo directorio, siendo asignado
//como una variable