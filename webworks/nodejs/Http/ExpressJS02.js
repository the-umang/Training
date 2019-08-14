// npm install express

const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/example",(req,res)=>{
    res.send("Example Route Called");
})

app.get("/example/:name/:age",(req,res)=>{
    // http://localhost:3000/example/naveen/29
    console.log(req.query);
    console.log("--------------------------------------");
    console.log("Name : "+req.params.name);
    console.log("Age : "+req.params.age);

    console.log(req.query);
    //to invoke query params
    // http://localhost:3000/example/naveen/29?city=bengalore&state=karnatake
    console.log("City "+req.query.city);
    console.log("State "+req.query.state);
})
app.listen(3000);