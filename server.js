var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


app.use(express.static('./public'));


require('./routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
