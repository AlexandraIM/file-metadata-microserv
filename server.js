
// init project
var express = require('express');
var app = express();
var upload = require("multer")();

app.use(express.static('public'));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/api/file",upload.any(), function (req, res) {
  console.log(req.files[0]);
  res.json(req.files[0]);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
