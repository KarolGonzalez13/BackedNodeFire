var rutas = require("express").Router();
//var {Router} = require("express");
var {mostrarUsuarios, borrearUsuario, buscarPorId, nuevoUsuario} = require("../bd/usuariosBD");

rutas.get("/",async (req, res)=>{
   // res.send("hola");
   var usuariosValidos=await mostrarUsuarios();
   res.json(usuariosValidos);
   //console.log(usuariosValidos);
});

rutas.get("/buscarPorId/:id",async (req, res)=>{
   var usuariosValidos=await buscarPorId(req.params.id);
   res.json(usuariosValidos);
});

rutas.delete("/borrarUsuario/:id",async (req, res)=>{
   var usuarioBorrado=await borrearUsuario(req.params.id);
   res.json(usuarioBorrado);
});

rutas.post("/nuevoUsuario",async (req, res)=>{
   var usuarioValido=await nuevoUsuario(req.body);
   res.json(usuarioValido);
});


module.exports=rutas;
