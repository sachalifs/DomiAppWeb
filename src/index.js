require('babel-polyfill');
var page = require('page');

require('./homepage');
require('./login');
require('./footer');
//pagina de asignacion de cada una de las rutas de vista servidas por page.js
page();
