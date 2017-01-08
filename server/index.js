const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static('build'));

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});