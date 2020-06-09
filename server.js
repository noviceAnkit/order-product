const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost:27017/gqlData' , {useNewUrlParser : true ,useUnifiedTopology: true ,
    useCreateIndex: true,
    useFindAndModify: false
   } ).then(con=>{
      console.log('Databse connected successfully');
      
  }).catch ( err => console.log(err));

const port = process.env.PORT || 3000;
//const hostname = '127.0.0.1';

const server = http.createServer(app);
//const server = http.createServer((req,res) => {

    //res.statuscode = 200;
    //res.setHeader('content-type','application/JSON');
    //res.end(app);
//});

server.listen(port,() => {
    console.log('server running at port 3000');
});
