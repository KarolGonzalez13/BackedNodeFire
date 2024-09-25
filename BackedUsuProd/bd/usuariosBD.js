const usuariosBD = require("./conexion").usuarios;
const Usuario=require("../modelos/UsuarioModelo");
const{encriptarPassword, validarPassword,usuarioAutorizado,adminAutorizado}=require("../middlewares/funcionesPassword")

function validarDatos(usuario){
    var valido=false;
    if(usuario.nombre!=undefined && usuario.usuario!=undefined && usuario.password!=undefined){
        valido=true;
    }
    return valido;
}

async function mostrarUsuarios(){
    const usuarios= await usuariosBD.get();
    //console.log(usuarios);    
    usuariosValidos=[];
    usuarios.forEach(usuario => {
        const usuario1=new Usuario({id:usuario.id,...usuario.data()});
        if(validarDatos(usuario1.getUsuario)){
            usuariosValidos.push(usuario1.getUsuario);
        }
 
    });
    //console.log(usuariosValidos);
    return usuariosValidos;
}

//mostrarUsuarios();

async function buscarPorId(id) {
    const usuario=await usuariosBD.doc(id).get();
    const usuario1=new Usuario({id:usuario.id,...usuario.data()});
    var usuarioValido;
    if(validarDatos(usuario1.getUsuario)){
        usuarioValido=usuario1.getUsuario;
    }
     return usuarioValido;
}

async function nuevoUsuario(data) {
    const {salt,hash} =encriptarPassword(data.password);
    data.password=hash;
    data.salt=salt;
    data.tipoUsuario="usuario";
    const usuario1=new Usuario(data);
    var usuarioValido=false;
    if(validarDatos(usuario1.getUsuario)){
    await usuariosBD.doc().set(usuario1.getUsuario);
    usuarioValido=true;
}
return usuarioValido;
}

async function borrearUsuario(id) {
    var usuarioValido=await buscarPorId(id);
    var usuarioBorrado=false;
    if(usuarioValido){
        await usuariosBD.doc(id).delete();
        usuarioBorrado=true;
    }
    return usuarioBorrado;
    //console.log(await buscarPorId(id));
}
//revisar cuando si existe el usuario, pero el usuario es incorrecto TAREA
//borrearUsuario("1");

module.exports={
    mostrarUsuarios,
    nuevoUsuario,
    borrearUsuario,
    buscarPorId
}

//agregar usuario
/*data={
    nombre:"Mari",
    usuario:"admin",
    password:"abd"
}

async function prueba() {
    console.log(await nuevoUsuario(data));    
}

prueba();*/