var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var pessoasService = require('../services/pessoasService');

/* GET home page. */
router.get('/index', function(req, res, next) {
  var posts = postsService.getPosts();

  res.render('index', { title: 'Blog', posts: posts });
});

router.get('/equipe', function(req, res, next) {
  var pessoas = pessoasService.getPessoas();

  res.render('Equipe', { title: 'Blog', pessoas: pessoas });
});

router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', { title: post.title, post: post });

});

module.exports = router;
