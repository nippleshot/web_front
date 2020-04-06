--renew pictures Table
CREATE TABLE players (
  image_id varchar(30) NOT NULL,
  image MEDIUMTEXT,
  PRIMARY KEY (`image_id`)
);

INSERT INTO players VALUES('heungminson', LOAD_FILE('/Users/giljaesong/tottsPlayers/heungminson.txt'));
INSERT INTO players VALUES('christianeriksen', LOAD_FILE('/Users/giljaesong/tottsPlayers/christianeriksen.txt'));
INSERT INTO players VALUES('delealli', LOAD_FILE('/Users/giljaesong/tottsPlayers/delealli.txt'));
INSERT INTO players VALUES('harrykane', LOAD_FILE('/Users/giljaesong/tottsPlayers/harrykane.txt'));
INSERT INTO players VALUES('hugolloris', LOAD_FILE('/Users/giljaesong/tottsPlayers/hugolloris.txt'));
INSERT INTO players VALUES('janvertonghen', LOAD_FILE('/Users/giljaesong/tottsPlayers/janvertonghen.txt'));
INSERT INTO players VALUES('lucasmoura', LOAD_FILE('/Users/giljaesong/tottsPlayers/lucasmoura.txt'));
INSERT INTO players VALUES('tobyalderweireld', LOAD_FILE('/Users/giljaesong/tottsPlayers/tobyalderweireld.txt'));

INSERT INTO players VALUES('videoSrc', LOAD_FILE('/Users/giljaesong/tottsPlayers/videoSrc.txt'));
