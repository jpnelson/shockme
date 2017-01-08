const micro = require('micro');

const server = micro(async (req, res) => {
  res.writeHead(200)
  res.end('hi')
});

server.listen(3000);
