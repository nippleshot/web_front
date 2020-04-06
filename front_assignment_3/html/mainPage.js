module.exports = {
  HTML:function(mainlink, user, joinUs, vidSrc, one, two, three, four, five, six, seven, eight){
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta content="text/html; charset=euc-kr">
    <title>Tottenham Hotspur Fan Club</title>
    <style type="text/css">
        @import url("CSS/main.css");
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
          var lazyloadImages = document.querySelectorAll("img.lazy");
          var lazyloadThrottleTimeout;

          function lazyload () {
            if(lazyloadThrottleTimeout) {
              clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                      img.src = img.dataset.src;
                      img.classList.remove('lazy');
                    }
                });
                if(lazyloadImages.length == 0) {
                  document.removeEventListener("scroll", lazyload);
                  window.removeEventListener("resize", lazyload);
                  window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
          }

          document.addEventListener("scroll", lazyload);
          window.addEventListener("resize", lazyload);
          window.addEventListener("orientationChange", lazyload);
        });
    </script>
    </head>
    <body>
      <div id="wapper">

              <header>
          			<div class="container">
          				<div id="logo"><a href="/${mainlink}">Tottenham Hotspur</a></div>

          				<nav>
                    ${user}
          				</nav>
          			</div>
          		</header>


              <div class="background">


                <div class="hero-text">
                  ${joinUs}
                </div>

              </div>

              </br>

              <div class="container2">
                  <div id="wrapper2">
                  <div class="equipo-item" style="min-width: 90%;">
                    <video controls class="equipo-image">
                      <source src="image/totthighlight-short.mp4" type="video/mp4">
                      Your browser does not support HTML5 video.
                    </video>


                    <h2 class="titulo-equipo"> The Latest Game </h2>
                    <p> Highlights from our 1-1 draw against Sheffield United in the Premier League at Tottenham Hotspur Stadium.  </p>

                    <h2 class="titulo-equipo"> Match data </h2>

                    <table id="match">
                          <thead>
                            <tr>
                              <th>  </th><th style="color:#1A237E;">Spurs</th><th style="color:red;">United</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Goals</td><td> Son 58' </td><td> Baldock 78' </td>
                            </tr>
                            <tr>
                              <td>Yellow cards</td><td> Dier, Foyth </td><td> Norwood, Basham </td>
                            </tr>
                            <tr>
                              <td>Venue</td><td colspan="2"> Tottenham Hotspur Stadium </td>
                            </tr>
                            <tr>
                              <td>Weather</td><td colspan="2">  Heavy rain, gentle breeze, 8 degrees </td>
                            </tr>
                            <tr>
                              <td>Fans</td><td colspan="2"> 59,781 </td>
                            </tr>
                          </tbody>
                    </table>
                  </div>
               </div>
               </br></br>
               <div id="wrapper2">
                 <h2 style="color: #1A237E;">Player Season Stats</h2>
               </div>


                <div id="wrapper2">
                  <div class="equipo-item">
                      <img src="image/firstteam_hugolloris.png" data-src="${one}" width="200" height="250" class="lazy equipo-image">

                      <h2 class="titulo-equipo">Hugo Lloris</h2>
                      <h1 class="number"> 1 </h2>
                      <p> Born: 26 December 1986 (Nice, France) </p>
                      <p> Position: <strong>Goalkeeper</strong> </p>
                      <h4> - Premier League 2019/2020 - </h4>
                      <table>
                            <thead>
                              <tr>
                                <th>Apps (Subs)</th><th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>7 (0)</td><td> 0 </td>
                              </tr>
                            </tbody>
                      </table>

                  </div>

                  <div class="equipo-item">
                      <img src="image/firstteam_tobyalderweireld.png" data-src="${two}" width="200" height="250" class="lazy equipo-image">

                      <h2 class="titulo-equipo">Toby Alderweireld</h2>
                      <h1 class="number"> 4 </h2>
                      <p> Born : 02 March 1989 (Wilrijk, Belgium) </p>
                      <p> Position: <strong>Defender</strong> </p>
                      <h4> - Premier League 2019/2020 - </h4>
                      <table>
                            <thead>
                              <tr>
                                <th>Apps (Subs)</th><th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>11 (0)</td><td> 0 </td>
                              </tr>
                            </tbody>
                      </table>

                  </div>
                </div>

                <div id="wrapper2">
                  <div class="equipo-item">
                      <img src="image/firstteam_janvertonghen.png" data-src="${three}" width="200" height="250" class="lazy equipo-image">

                      <h2 class="titulo-equipo">Jan Vertonghen</h2>
                      <h1 class="number"> 5 </h2>
                      <p> Born: 24 April 1987 (Sint-Niklaas, Belgium) </p>
                      <p> Position: <strong>Defender</strong> </p>
                      <h4> - Premier League 2019/2020 - </h4>
                      <table>
                            <thead>
                              <tr>
                                <th>Apps (Subs)</th><th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>6 (0)</td><td> 0 </td>
                              </tr>
                            </tbody>
                      </table>

                  </div>

                  <div class="equipo-item">
                      <img src="image/firstteam_heungminson.png" data-src="${four}" width="200" height="250" class="lazy equipo-image">

                      <h2 class="titulo-equipo">Heung Min Son</h2>
                      <h1 class="number"> 7 </h2>
                      <p> 08 July 1992 (Chuncheon, South Korea) </p>
                      <p> Position: <strong>Forward</strong> </p>
                      <h4> - Premier League 2019/2020 - </h4>
                      <table>
                            <thead>
                              <tr>
                                <th>Apps (Subs)</th><th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>10 (1)</td><td> 3 </td>
                              </tr>
                            </tbody>
                      </table>

                  </div>
                </div>

                <div id="wrapper2">
                  <div class="equipo-item">
                      <img src="image/firstteam_harrykane.png" data-src="${five}" width="200" height="250" class="lazy equipo-image">

                      <h2 class="titulo-equipo">Harry Kane</h2>
                      <h1 class="number"> 10 </h2>
                      <p> Born: 28 July 1993 (London, England) </p>
                      <p> Position: <strong>Forward</strong> </p>
                      <h4> - Premier League 2019/2020 - </h4>
                      <table>
                            <thead>
                              <tr>
                                <th>Apps (Subs)</th><th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>11 (0)</td><td> 6 </td>
                              </tr>
                            </tbody>
                      </table>

                  </div>

                  <div class="equipo-item">
                      <img src="image/firstteam_delealli.png" data-src="${six}" width="200" height="250" class="lazy equipo-image">

                      <h2 class="titulo-equipo">Dele Alli</h2>
                      <h1 class="number"> 20 </h2>
                      <p> Born: 11 April 1996 (Milton Keynes, England) </p>
                      <p> Position: <strong>Midfielder</strong> </p>
                      <h4> - Premier League 2019/2020 - </h4>
                      <table>
                            <thead>
                              <tr>
                                <th>Apps (Subs)</th><th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>5 (1)</td><td> 2 </td>
                              </tr>
                            </tbody>
                      </table>

                  </div>
                </div>

                <div id="wrapper2">
                  <div class="equipo-item">
                      <img src="image/firstteam_christianeriksen.png" data-src="${seven}" width="200" height="250" class="lazy equipo-image">

                      <h2 class="titulo-equipo">Christian Eriksen</h2>
                      <h1 class="number"> 23 </h2>
                      <p> Born: 14 February 1992 (Middelfart, Denmark) </p>
                      <p> Position: <strong>Midfielder</strong> </p>
                      <h4> - Premier League 2019/2020 - </h4>
                      <table>
                            <thead>
                              <tr>
                                <th>Apps (Subs)</th><th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>10 (3)</td><td> 1 </td>
                              </tr>
                            </tbody>
                      </table>
                  </div>

                  <div class="equipo-item">
                      <img src="image/firstteam_lucasmoura.png" data-src="${eight}" width="200" height="250" class="lazy equipo-image">

                      <h2 class="titulo-equipo">Lucas Moura</h2>
                      <h1 class="number"> 27 </h2>
                      <p> Born: 13 August 1992 (São Paulo, Brazil) </p>
                      <p> Position: <strong>Midfielder</strong> </p>
                      <h4> - Premier League 2019/2020 - </h4>
                      <table>
                            <thead>
                              <tr>
                                <th>Apps (Subs)</th><th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>10 (6)</td><td> 1 </td>
                              </tr>
                            </tbody>
                      </table>

                  </div>
                </div>

              </div>


     </div>

    </body>
    </html>
    `;
  }
}
