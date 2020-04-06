var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

//Templates
var mainTemplate = require('./html/mainPage.js');
var signInTemplate = require('./html/signInPage.js');
var signUpTemplate = require('./html/signUpPage.js');

//crypto
var crypto = require('crypto');

//mysql
var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : ''
});
db.connect();

// express
var express = require('express')
var app = express()
//middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//const Blob = require('node-blob');

//static file
app.use(express.static('html'));
app.use('/SignUp', express.static('html'));
app.use('/User', express.static('html'));




app.get('/', function(request, response) {

    db.query(
      `SELECT * FROM players`,
      function (error2, playerPic) {
          if(error2){
            throw error2;
          }

          var christianeriksen = 'data:image/png;base64,'+ playerPic[0].image;
          var delealli = 'data:image/png;base64,'+ playerPic[1].image;
          var harrykane = 'data:image/png;base64,'+ playerPic[2].image;
          var heungminson = 'data:image/png;base64,'+ playerPic[3].image;
          var hugolloris = 'data:image/png;base64,'+ playerPic[4].image;
          var janvertonghen = 'data:image/png;base64,'+ playerPic[5].image;
          var lucasmoura = 'data:image/png;base64,'+ playerPic[6].image;
          var tobyalderweireld = 'data:image/png;base64,'+ playerPic[7].image;

          var videoSrc = playerPic[8].image;


          var mainWeb = mainTemplate.HTML(
            ``,
            `
              <a href="/">Home</a>
              <a href="/SignUp">Sign Up</a>
              <a href="/SignIn">Sign In</a>
            `,
            `
              <a href="/SignUp"><input type="submit" name="" value="Join Us !" style="width:100px;height:40px;margin-top:320px"></a>
            `,
            `${videoSrc}`,
            `${hugolloris}`,
            `${tobyalderweireld}`,
            `${janvertonghen}`,
            `${heungminson}`,
            `${harrykane}`,
            `${delealli}`,
            `${christianeriksen}`,
            `${lucasmoura}`,

          );

          response.send(mainWeb);

      }
    );

});



app.get('/:something', function(request, response) {
  var something = path.parse(request.params.something).base;

  if(something == 'SignUp'){
    var signUpWeb = signUpTemplate.HTML( );
    response.send(signUpWeb);
  }
  if(something == 'SignIn' ){
    var signInWeb = signInTemplate.HTML(``);
    response.send(signInWeb);
  }
  if(something == 'Warning'){
    var signInWeb = signInTemplate.HTML(
      `
        <a style="color: #ff4f6d;font-size: 15px;">Check your email and password again!</a><br><br>
      `
    );
    response.send(signInWeb);
  }
  if(something == 'Sucessed'){
    var signInWeb = signInTemplate.HTML(
      `
        <a style="color: #ff4f6d;font-size: 15px;">Sign Up Successed! Please Sign In</a><br><br>
      `
    );
    response.send(signInWeb);
  }

});


app.get('/SignUp/:state', function(request, response) {
  var state = path.parse(request.params.state).base;
  if(state == 'Email'){
    var signUpWeb = signUpTemplate.HTML(
      `
        <a style="color: #ff4f6d;font-size: 15px;">Email is Already exist</a><br><br>
      `,
    );
    response.send(signUpWeb);
  }
});


app.get('/User/:nickname', function(request, response) {
  var nickname = path.parse(request.params.nickname).base;
  var mainUser = mainTemplate.HTML(
    `User/${nickname}`,
    `
     <a>Welcome!&nbsp<strong>${nickname}</strong></a>
     <a href="/">Sign Out</a>
    `,
    ` `,
    ` `
  );
  response.send(mainUser);

});




app.post('/SignIn_process', function(request, response) {
  var post = request.body;
  var hmac = crypto.createHmac('sha256','hash password');
  var pass = hmac.update(post.password).digest('hex');

  db.query(
    `SELECT * FROM user WHERE email=? and password=?`,
    [post.email, pass],
    function (error2, user) {
        if(error2){
          throw error2;
        }
        console.log(user);
        if(user[0] == null){
          response.redirect(`/Warning`);
        }else{
           response.redirect(`/User/${user[0].nickname}`);
        }

    }
  );

});

app.post('/SignUp_process', function(request, response) {
  var post = request.body;

  db.query(
    `SELECT * FROM user WHERE email=?`,
    [post.email],
    function (error2, user) {
        if(error2){
          throw error2; //ㅇㅔ러를 콘솔에 나타낸후 어플리케이션 즉시 중지
        }
        if(user[0] == null){ //이메일이 존재하지 않음
          var hmac = crypto.createHmac('sha256','hash password');
          var pass = hmac.update(post.password).digest('hex');

          db.query(
            `
            INSERT INTO user (email, nickname, password, gender, birthday, favPlayer, created)
            VALUES(?, ?, ?, ?, ?, ?, NOW())
            `,
            [post.email, post.nickname, pass, post.gender, post.birthday, post.favPlayer],
            function (error2, user) {
                if(error2){
                  throw error2; //ㅇㅔ러를 콘솔에 나타낸후 어플리케이션 즉시 중지
                }
                response.redirect(`/Sucessed`);
            }
          );
        }else{ // 이미 존재하는 이메일이 있다
          //result 변수에 값을 집어 넣을 수 없다 바로 redirect?
          response.redirect(`/SignUp/Email`);
        }

    }
  );

});


app.listen(3000);
