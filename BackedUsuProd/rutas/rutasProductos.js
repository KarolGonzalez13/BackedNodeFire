var rutas = require("express").Router();
var {mostrarProductos,nuevoProducto,borrarProducto,buscarPorIdP}= require("../bd/productoBD");

rutas.get("/productos",async(req, res)=>{
   var productosValidos=await mostrarProductos();
   res.json(productosValidos);
});

rutas.get("/buscarPorIdP/:id", async(req,res)=>{
   var productosValido =await buscarPorIdP(req.params.id);
   res.json(productosValido);
});

rutas.delete("/borrarProducto/:id", async(req,res)=>{
   var productoBorrado=await borrarProducto (req.params.id);
   res.json(productoBorrado);
});

rutas.post("/nuevoProducto",async (req, res)=>{
   var productoValido=await nuevoProducto(req.body);
   res.json(productoValido);
});


module.exports=rutas;