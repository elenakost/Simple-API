var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser());

var calculator = require('./calculator');


app.listen(3000, function(){
	console.log('Server started!');
});


app.get('/', function(req, res){
	res.send('Hello World');
});

var students = [];

app.post('/students', function(req, res){
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	students.push({
		firstName: firstName,
		lastName: lastName
	});
	res.send();
});

app.get('/students', function(req, res){
	res.send(students);
});

app.post('/add', function(req, res){
	var a = parseInt(req.body.a);
	var b = parseInt(req.body.b);
	var sum = calculator.add(a,b);
	res.send({
		result: sum
	});
});