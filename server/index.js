const http = require('http');

const PORT = process.env.npm_package_myWebServer_port || 8090;

http.createServer((req, res)=>{
  console.log(`received request for ${req.url}`);
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.write('hello learner');
  res.end(`received request for ${req.url}`);
})
.listen(PORT, (error)=>{
  if(error){
    console.error(error);
  }else{
    console.log(`server running at http://localhost:${PORT}/`);
  }
});
