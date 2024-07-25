const http = require('http');  // 'http' should be wrapped in quotes

http.createServer((req, res) => {  // 'res' instead of 'rse'
  res.write("<h1>Hello This is Anshu Pandey</h1>");
  res.end();
}).listen(4500, () => {
  console.log("Server is listening on port 4500");
});
