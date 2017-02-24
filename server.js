import React from 'react';
import ReactDOMServer from 'react-dom/server';
import indexTemplate from './static/indexTemplate.js'
import App from './components/App.jsx'
import Login from './components/Login.jsx'
var path = require('path')
var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var fs = require('fs')
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const uuidV1 = require('uuid/v1');
app.use(express.static('static'))
app.use(bodyParser.json())

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
  function(username, password, done) {
      username == 'hello' && password == '123' ? done(null, username) : done(null)
    }))
  
class Token {
  constructor(){
    var token =""
  }
  setToken = value => this.token = value
  getToken = () => this.token

}
var token = new Token()

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    token.setToken(uuidV1()) ;
    res.send(token.getToken())
  
  }.bind(this));

var verifyToken = (req,res,next) => req.query.token == token.getToken() ? next() : res.send('POST failed: wrong token') 
var emptyPost = (post,res,next)  => String(post.body.title).length == 0 ||  String(post.body.text).length == 0 ? res.send('fields cant be empty') : next()
app.post('/newPost',verifyToken,emptyPost,function(req,res){
    var blogPost = req.body
    fs.readFile('./blogposts',function(err,res){
         var posts = JSON.parse(res)
         posts.push(blogPost)
         fs.writeFile('./blogposts',JSON.stringify(posts))
    }) 
    res.send('success')
})

app.get('/getBlogPosts',function(req,res){
    var posts;
    fs.readFile('./blogposts',function(err,fres){
        posts = JSON.parse(fres).slice(0,req.query.number)
        res.send(posts)
    }.bind(this))
})

app.get('/',function(req,res){
    const renderedApp = ReactDOMServer.renderToString(<App/>)
    res.send(indexTemplate({body: renderedApp}))
})
app.get('*',function(req,res){
      res.sendFile(path.join(__dirname,'static/index.html'));
})

app.listen(3003,function(req,res){

    console.log('Server running!')
});