var yo = require('yo-yo');
var yoify = require('yo-yoify');
var layout = require('../layout');
var picture = require('../picture-card');
var mapa = require('./mapas');
var translate = require('../translate'); 


module.exports = function (pictures) {
  var el = yo`<div class="timeline">
                <div class="row">
                  <div class="col m4 l3">
                    ${pictures}
                    ${pictures.map(function (pic) {
                      return picture(pic);
                    })}</div>
                  <div id="map" class="col m8 l9"></div>
                </div>
              </div>
            </div>`;
  return layout(el);
}
