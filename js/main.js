//Declaracion de Variables {Practica}

/* Pagina de reservas online, con opciones de hoteles incluidos a solo sitios turisticos de Belice. 
La idea basicamente sera proporcionar al usuario informacion turistica de un pais centroamericano con 
poca extension geografica y ofrecerle el mejor Deal para unas vacaciones sonadas.*/

let titulo = "Trip Deal";

const DB = []

function emptyValue(){
    const usuario = prompt("Ingrese su nombre de Usuario")
    console.log("El nombre de usuario es" + usuario)

    const password = prompt("Ingrese su contrasena")
    console.log("La contrasena de" + " " + usuario + " " + es + " " + password)

    DB.push(usuario, password)

    if (usuario || password === ""){
        return false;
    }else{
        return true;
    }
}
emptyValue()

let datoValido = emptyValue(prompt("Ingrese un valor valido"))
while(!datoValido){
    datoValido = prompt("Ingrese un valor valido")
}
emptyValue()
let usuario = prompt("Ingrese su nombre de Usuario");
console.log("El nombre de usuario es" + usuario);

let password = prompt("Ingrese su contrasena");
console.log("La contrasena de" + " " + usuario + " " + es + " " + password)

let username= "mafer657";
let pass= "0258mafer";

for(let i = 0; i < 3; i ++){
    if (usuario === username && password === pass){
        alert("Bienvenido(a)" + " " + usuario);
        break;
    }else{
        alert("Nombre de Usuario o contrasena incorrecto");
    }
}

let signIn= prompt("Tienes una cuenta creada en Trip Deal? \n 1-Si \n 2- No");
switch (signIn) {
    case "Si":
    alert("Bienvenido a Trip Deal! Ingresa tus datos en la seccion de Sign In para comenzar!")        
        break;
    case "No":
    alert("Estas a solo unos pasos de empezar tu viaje! Registrate en la seccion de Sign Up para comenzar!")
        break;   

    default:
        break;
}

function Busqueda(lugar, fecha, huespedes){
    this.lugar = lugar;
    this.fecha = fecha;
    this.huespedes = huespedes;
}

let lugar = prompt("Lugar de Destino");
let fecha = prompt("Fecha de Estadia");
let huespedes = prompt("Guest(s)");
    if (isNaN(huespedes)){
        alert("Ingrese un valor valido");
    }
