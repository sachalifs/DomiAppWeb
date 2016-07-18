var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var mapas = require('./mapas');

page('/', header, asyncLoad, function (ctx, next) { 
  title('Domilogistica');
  var main = document.getElementById('main-container');
  empty(main).appendChild(template(ctx.pictures));
  mapas();
})

async function asyncLoad(ctx, next) {
  try {
    ctx.pictures = await fetch('/api/pictures').then(res => res.json());
      next();
  } catch (err) {
      return console.log(err);
    }
}


//gracias a empty despues de llevarnos el hipervinculo a alguna vista deja de mostrarnos la ruta hipervinculada (seguridad), igualmente,  
//el appendChild nos lleva al archivo template.js que se encuentra en el mismo directorio, siendo asignado
//como una variable