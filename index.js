var http = require('http');
var os = require('os');
var port = 8081;

http
  .createServer((req, res) => {
    console.log('Requested: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>docker 예제1</h1>');
    res.write('<h2>Hello Docker!</h2>');
    res.end();
  })
  .listen(port, () => {
    console.log('Listen ... ' + os.hostname() + ':' + port);
  });
