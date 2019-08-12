const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();

const readStream = fs.createReadStream("./files/employees.txt",'UTF-8');
const writeStream = fs.createWriteStream("./files/nemployees.txt.gz",'UTF-8');

// short cut version of what we had done
readStream.pipe(gzip).pipe(writeStream);