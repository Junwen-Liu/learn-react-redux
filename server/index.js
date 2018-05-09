const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = process.env.npm_package_myWebServer_port || 8090;

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/hello/:name?', (req, res)=>res.send(`HI, ${req.params.name}, long time no see!`));

app.get('/elect/:fname/:lname?/for/:position?', (req, res)=>res.send(req.params));

app.get('/search', (req, res)=>res.send(`You are searching "${req.query.q}"`))

app.get('/hello', (req, res)=>res.send('Hi, this is Radiation Oncology'));

app.get('/bye', (req, res)=>res.send('See you later'));

app.get('*', (req, res)=>{
  console.log(`received request for ${req.url}`);
  res.type('text')
  .status(200)
  .send(`received request for ${req.url}`);
});

app.post('/form', (req, res) => res.send(`You have entered "${req.body.field1}"`));

app.use(express.static(path.join(__dirname, '../public')));

http.createServer(app)
.listen(PORT, (error)=>{
  if(error){
    console.error(error);
  }else{
    console.log(`server running at http://localhost:${PORT}/`);
  }
});
