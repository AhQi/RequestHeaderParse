// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

function reqHdrParser(reqHdr){
  return {"ipaddress":reqHdr['x-forwarded-for'].split(",")[0],
          "language":reqHdr['accept-language'].split(/[\,\;]/)[0],
          "software":reqHdr['user-agent'].split(/[\(\)]/)[1]};
}
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/api/whoami/", function (req, res) {
  //res.sendFile(__dirname + '/views/index.html');
  res.send(reqHdrParser(req.headers));
  //res.send(req.headers);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
