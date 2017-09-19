var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// var logger = function(req, res, next) {
//   console.log('Logging ...');
//   next();
// }

// app.use(logger);

// View Engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))


var users = [
  {
    id: 1,
    first_name: 'Kelso',
    last_name: 'Cisneros',
    email: 'kelso@kelso.com',
  },
  {
    id: 2,
    first_name: 'Janet',
    last_name: 'Santos',
    email: 'janet@janet.com',
  },
  {
    id: 3,
    first_name: 'Benny',
    last_name: 'Cisneros',
    email: 'benny@benny.com',
  },
]

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Customers',
    users: users
  });
});

app.post('/users/add', function(req, res) {
  console.log(req.body.first_name);
});


app.listen(3000, function() {
  console.log('Server started on Port 3000 ...');
})