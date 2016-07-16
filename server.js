var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res){
	res.render('index', { title: 'Domilogistica' });
})

app.get('/login', function (req, res){
	res.render('index', { title: 'Domilogistica - Logueate' });
})

app.get('/domilogistica', function (req, res){
	res.render('index', { title: 'DomiApp' });
})

app.get('/api/pictures', function (req, res){
	var pictures = [
    {
  user: {
    username: 'Colaborador 1',
    avatar: 'https://d.wattpad.com/story_parts/74714423/images/13ba15c0398fc297.jpg',
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createAt: new Date()
    },
    {
  user: {
    username: 'Colaborador 2',
    avatar: 'http://despertando.me/wp-content/uploads/2014/03/descarga2.jpg',
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createAt: new Date().setDate(new Date().getDate() - 2)
    }
  ];

  setTimeout(function () {
  	res.send(pictures);
  }, 1000)
})

app.listen(3000, function(err){
if (err) return console.log('DomiApp tiene un problema...'), process.exit(1);

console.log('DomiAppWeb en linea en el puerto 3000')
})