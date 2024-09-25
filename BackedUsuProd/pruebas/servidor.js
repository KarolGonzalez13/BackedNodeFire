const express = require("express");
require("dotenv").config();
const app=express();

//middleware
var saludo=(req,res,next)=>{
    console.log("Hola");
    next;
}

app.use(saludo);

app.get("/",saludo,(req,res)=>{
    res.send("Hola estas en raiz");
});

app.get("/home",(req,res)=>{
    res.send("Hola estas en home");
});

app.get("/otro",(req,res)=>{
    res.send("Hola estas en otro");
});

const port=process
.env.PORT || 3000 //esta intruccion es para el sistema operativo
app.listen(port,()=>{//lineas para arrancar servidor 
    console.log("Servidor en http://localhost:"+port);
    
}) 