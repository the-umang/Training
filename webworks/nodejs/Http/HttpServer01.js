const http = require("http");

const server  = http.createServer((req,res)=>{
    // res.write("Hello World from NodeJS");
    // res.end();

    if(req.url==="/"){
        res.write("Hello World from NodeJS");
        res.end();
    }else{
        res.write("You are looking in the sub domain");
    res.end();
    }

})

server.listen(3000);