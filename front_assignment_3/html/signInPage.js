module.exports = {
  HTML:function(message){
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta content="text/html; charset=euc-kr">
    <title>Sign In - TOTTENHAM</title>
    <style type="text/css">
        @import url("CSS/signIn.css");
    </style>


    </head>
    <body>
      <div id="wapper">

              <header>
          			<div class="container">
          				<div id="logo"><a href="/">Tottenham Hotspur</a></div>

          				<nav>
                    <a href="/">Home</a>
                    <a href="/SignUp">Sign Up</a>
                    <a href="/SignIn">Sign In</a>
          				</nav>
          			</div>
          		</header>


              <div class="loginbox">
                  <img src="image/tottlogo.png" class="avatar">
                  <h1>Login Here</h1>
                  <form action="/SignIn_process" method="post">
                    <p style="color:#1A237E">Email ID</p>
                    <input type="text" name="email" placeholder="  Enter your Email ID">
                    <p style="color:#1A237E">Password</p>
                    <input type="Password" name="password" placeholder="  Enter Password">
                    ${message}
                    <input type="submit" value="Sign In">
                    <a href="#">Lost your password ?</a><br>
                    <a href="/SignUp">Don't have an account ?</a>
                  </form>
                </div>
     </div>

    </body>
    </html>
    `;
  }
}
