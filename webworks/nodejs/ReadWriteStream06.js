const fs = require("fs");

// to read and wrtie the files in form of a chunk

const readStream = fs.createReadStream("./files/sample1.txt","UTF-8");
const writeStream = fs.createWriteStream("./files/newsample.txt","UTF-8");

// of this is it does not 

readStream.on("data",(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
})

