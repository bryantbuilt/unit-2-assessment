var express = require('express');
var router = express.Router();
var todos = require('../public/javascripts/data/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', todos });
});

router.post('/todos', function(req, res, next){
  todos.push({todo: req.body.todoName, done: false});
  res.redirect('/');
});

module.exports = router;
