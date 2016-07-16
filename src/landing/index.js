var yo = require('yo-yo');

module.exports = function landing(box) {
return yo`<div class="container landing">
          <div class="row">
            <div class="col s10 push-s1">
              <div class="row">
                <div class="col m5 hide-on-small-only">
                  <img class="logo" src="celular1.png" />
                </div>
                ${box}
              </div>
            </div>
          </div>    
    </div>`;
//gracias a yo-yo este fragmento sale a un costado del menu login
}
