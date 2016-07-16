var empty = require('empty-element');
var yoify = require('yo-yoify');
var LeafletMap = require('leaflet-map');
var L = require('leaflet'); 
//var yo = require('yo-yo');

L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images';

var mape = LeafletMap({
scrollWheelZoom: false
});
//var mape = L.map('map');
	mape.setView([6.2483721, -75.5751648], 16);

var layer = 
	L.tileLayer('https://api.mapbox.com/styles/v1/cashtor/ciqfwhr2f000gcem7954wwjpm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FzaHRvciIsImEiOiJjaXFkenBsYmcwMnp1ZnJtMXpianB4a2N2In0.7nXCKiQ56DozM77JvEmFOw', {
	maxZoom: 20, 
	id: 'cashtor.0kc4j5n1',
	accessToken: 'pk.eyJ1IjoiY2FzaHRvciIsImEiOiJjaXFkenBsYmcwMnp1ZnJtMXpianB4a2N2In0.7nXCKiQ56DozM77JvEmFOw'
});
layer.addTo(mape);
L.control.scale().addTo(mape);
L.marker([6.2483721, -75.5751648], {draggable: true}).addTo(mape);


//var el = yo;
//el.addTo(mapeo);


//  document.getElementById('map').innerHTML(mapeo);


//document.getElementById("map-container").innerHTML(map);
//next();
//carga = L.map('map-container');
//var canvas = new L.map('map-container');
//div.addTo(mapa);

//module.exports = function (ctx, next) {
//  const containermap = document.getElementById('#map-container');
//  containermap.innerHTML(map);
//  next();
//};

//mapObj.addTo(map); 






//var map = LeafletMap({
  //scrollWheelZoom: false,
//});
 // map.setView([6.2483721, -75.5751648], 16);

//var layer = L.tileLayer('https://api.mapbox.com/styles/v1/cashtor/ciqfwhr2f000gcem7954wwjpm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FzaHRvciIsImEiOiJjaXFkenBsYmcwMnp1ZnJtMXpianB4a2N2In0.7nXCKiQ56DozM77JvEmFOw', {
//  maxZoom: 20, 
 // id: 'cashtor.0kc4j5n1',
 // accessToken: 'pk.eyJ1IjoiY2FzaHRvciIsImEiOiJjaXFkenBsYmcwMnp1ZnJtMXpianB4a2N2In0.7nXCKiQ56DozM77JvEmFOw'
//});
//layer.addTo(map);
//L.control.scale().addTo(map);
//L.marker([6.2483721, -75.5751648], {draggable: true}).addTo(map);


