var yo = require('yo-yo');
var landing =require('../landing');
var translate = require('../translate');

var loginbox = yo`<div class="col s12 m7">
                      <div class="row">
                        <div class="login-box">
                          <img class="logo2" src="logo_DomiApp1.png">
                            <form class="login-form">
                              <h3>${translate.message('login.subheading')}</h3>
                              <div class="divider"></div>
                              <div class="section">
                                <input type="text" name="username" placeholder="${translate.message('username')}" />
                                <input type="password" name="password" placeholder="${translate.message('password')}" />
                                <button class="btn waves-effect waves-light btn-login" type="submit"><i class="fa fa-user" aria-hidden="true"></i>${translate.message('login.page')}</button>
                              </div>   
                            </form>
                        </div>
                      </div>
                    </div>`;
//segmento de vista de el acceso al sitio servido gracias a yo-yo costado derecho login
module.exports =landing(loginbox);