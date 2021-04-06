const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('public'));//http://localhost:3000


app.listen(port, function () {
    console.log('Example app listening on port' + port);
  });
