function saludar(){ // esta funcion manda a llamar en pantalla
    console.log("Hola");
}
saludar();



function saludar2(nombre=" anónimo"){// esta funcion manda a llamar en pantalla
    console.log("Hola"+nombre);
}
saludar2(" Juan Perez Cruz");



function saludar3(nombre=" anónimo"){// esta funcion retorna valores (Guardar la variable)
    var s="Hola"+nombre;
    return s;
}
console.log( saludar3(" Juancho"));



var saludo=(nombre)=>{//declaracion de funcion de flecha
    console.log("Hola"+nombre);
    
}
saludo(" Menganito");



var saludo2=(nombre)=>{//declaracion de funcion de flecha
    var s="Hola"+nombre;
    
}
saludo2(" Perenganito");



var saludo3=nombre=>{//declaracion de funcion de flecha
    var s="Hola"+nombre;
    return s;
}
console.log(saludo3(" Tenganito"));



var saludo4=nombre=>"Hola"+nombre;
   console.log(saludo4(" Pancracio"));


   
   //console.log(nombre=>"Hola"+nombre);



var saludo5=function(){
    console.log("Hola");
    
}
saludo5();

var saludo6=()=>{
    console.log("saludo6");
    
}

var saludo7=(nombre, s)=>{
    console.log("hola");
    s();
}
saludo7("Bethoven", saludo6);