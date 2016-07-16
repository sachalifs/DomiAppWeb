var yo = require('yo-yo');
//var moment = require('moment');
var translate = require('../translate');

module.exports = function pictureCard(pic) {
  var el; 
  function render(picture) {
  return yo`<div class="card ${picture.liked ? 'liked' : ''}">
    <div class="card-image">
      <img class="activator" src="${picture.url}" />
    </div>
    <div class="card-content">
      <a href="/user/${picture.user.username}" class="card-title">
		<img src="${picture.user.avatar}" class="avatar" />
		<span class="username">${picture.user.username}</span>
      </a>
      <small class="right time">${translate.date.format(picture.createdAt)}</small>
      <p>
      	<a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-check-circle" aria-hidden="true"></i></a>
        <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-check" aria-hidden="true"></i></a>
      	
        <span class="left likes">${translate.message('likes', { likes: picture.likes })}</span>
      </p>
    </div>
  </div>`
  }
// <span class="left likes">${translate.message('likes', { likes: picture.likes })}</span> se encarga de procezar la traduccion de acuerdo a la necesidad con formatJS
  function like(liked){
    pic.liked = liked;
    pic.likes+= liked ? 1 : -1;
    var newEl = render(pic);
    yo.update(el, newEl);
    //return false para que no nos envie a la ruta...
    return false;
  }

  el = render(pic);
  return el;
}