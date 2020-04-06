module.exports = {
  HTML:function(emailMsg){
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta content="text/html; charset=euc-kr">
    <title>Sign Up - TOTTENHAM</title>
    <style type="text/css">
        @import url("CSS/signUp.css");
    </style>
    <script language="javascript">
      function memberSubmit(){
        var email = document.getElementById("email").value;
        var nickname = document.getElementById("nickname").value;
        var password = document.getElementById("password").value;
        var pCorrect = document.getElementById("pCorrect").value;
        var gender = document.getElementById("gender").value;
        var birthday = document.getElementById("birthday").value;
        var favPlayer = document.getElementById("favPlayer").value;

        if(email=='' || nickname=='' || password=='' || pCorrect=='' || gender=='' || birthday=='' || favPlayer==''){
          alert('Please fill out every personal information!');
          return false;
        }
        if(password !== pCorrect){
          alert('Password does not match!');
          return false;
        }
        if(password.length>15 || password.length<5){
          alert('Password should be 5 to 15 chars!');
          return false;
        }

        return true;
      }
    </script>
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
                  <h1>Welcome to Spurs</h1>
                  <form action="/SignUp_process" method="post">
                    <p>Email ID</p>
                    <input type="email" id="email" name="email" placeholder="  Enter your Email ID" style="">
                    ${emailMsg}
                    <p>Nickname</p>
                    <input type="nickname" id="nickname" name="nickname" placeholder="  Enter your Nickname" style="">
                    <p>Set Password</p>
                    <input type="Password" id="password" name="password" placeholder="  Choose password (5-15 chars)">
                    <p>Confirm Password</p>
                    <input type="Password" id="pCorrect" name="pCorrect" placeholder="  Check Password">
                    <p>Gender</p>
                    <select id="gender" name="gender" class="form-control">
                      <option value="">Choose gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                    </br>
                    <p>Date of Birth</p>
                    <input type="date" id="birthday" name="birthday" style="width: 30%;">
                    </br>
                    <p>Who's your favorite Tottenham player? </p>
                    <select name="favPlayer" id="favPlayer" class="form-control">
                      <option value="">Choose Player</option>
                      <option value="HugoLloris">1. Hugo Lloris</option>
                      <option value="TobyAlderweireld">4. Toby Alderweireld</option>
                      <option value="JanVertonghen">5. Jan Vertonghen</option>
                      <option value="HeungMinSon">7. Heung Min Son</option>
                      <option value="HarryKane">10. Harry Kane</option>
                      <option value="DeleAlli">20. Dele Alli</option>
                      <option value="ChristianEriksen">23. Christian Eriksen</option>
                      <option value="LucasMoura">27. Lucas Moura</option>
                    </select>

                    <input type="submit" onclick="if(!memberSubmit()){return false;}" name="" value="Sign Up">

                  </form>
                </div>


     </div>

    </body>
    </html>
    `;
  }
}
