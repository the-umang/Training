const http = require("http");

const fs = require("fs");

http.createServer((req,res)=>{
    // const readStream  = fs.createReadStream("./static/index.html");

    // // its the responsibility of header 
    // res.writeHead(200,{'content-type':"text/html"})
    // readStream.pipe(res);

    const readStream  = fs.createReadStream("./json/employee.json");

    // its the responsibility of header 
    res.writeHead(200,{'content-type':"application/json"})
    readStream.pipe(res);
}).listen(3000);
