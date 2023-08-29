// declaramos las constantes y variables que usaremos
const piedra=document.getElementById("piedra");
const tijeras=document.getElementById("tijeras");
const papel=document.getElementById("papel");
const botones=document.querySelectorAll(".opcionUsuario");
let usuario;
let cpu;
let jugadas=["piedra", "papel", "tijeras"];
let ganador;
let ronda =0;
let ganoUsuario=0;
let ganoCpu=0;
let nombreJugador;

// funcion que toma el nombre del usuario y muestra la intefaz principal del juego
function comenzar(){
  nombreJugador=document.getElementById("name").value;
  nombreJugador=nombreJugador.toLocaleUpperCase();
  if (nombreJugador==""){
    alert("Ingrese nombre valido")
  } else{
    document.getElementById("inicio").style.display="none";
    document.getElementById("juego").style.display="block";
  }
}
// funcion que toma la eleccion del usuario y la aplica a una variable
function eleccionUsuario(a){
  usuario=a;
}
// funcion que crea la opcion de la pc y la aplica a una variable
function eleccionCpu(){
  let min=0;
  let max=2;
  let num=Math.floor(Math.random()*(max-min+1)+min);
  cpu = jugadas[num];
}
// funcion que determina el reglamento del juego
function determinarGanador(a,b){
  if(a==="tijeras"&& b==="papel"){
      return a
  } else if (a==="tijeras"&& b==="piedra"){
      return b
  } else if(a==="papel"&& b==="tijeras"){
      return b;
  } else if (a==="papel"&& b==="piedra"){
      return a;
  } else if(a==="piedra"&& b==="tijeras"){
      return a;
  } else if (a==="piedra"&& b==="papel"){
      return b;
  } 
}
// funcion que maneja la anotaciones de las rondas jugadas y los ganadores
function marcador(){
  document.getElementById("ronda").innerHTML="Ronda: "+ronda;
  document.getElementById("puntosUsuario").innerHTML= nombreJugador + ": "+ganoUsuario;
  document.getElementById("puntosCpu").innerHTML= "Cpu: "+ganoCpu;
  if(ganoCpu==3){
    document.getElementById("juego").style.display="none";
    document.getElementById("perdedor").style.display="block";
    document.getElementById("perdiste").innerHTML="Perdiste, intentalo nuevamente";
  }else if (ganoUsuario==3){
    document.getElementById("juego").style.display="none";
    document.getElementById("ganador").style.display="block";
    document.getElementById("ganaste").innerHTML="Felicidades "+nombreJugador+" sos el ganador!!";
  }
}
// funcion principal donde se realiza la jugada 
function jugar(){
  if (usuario != "piedra" && usuario != "papel" && usuario != "tijeras"){
    alert("Seleccione opcion valida para jugar")
  } else{
    if(ganoCpu<3&&ganoUsuario<3){
      eleccionCpu();
      ganador=determinarGanador(usuario,cpu);
      document.getElementById("textoUsuario").innerHTML= nombreJugador + " elijio " + usuario;
      document.getElementById("textoCpu").innerHTML= "Cpu elijio " + cpu;
      if (ganador==usuario){
        ganoUsuario ++;
      document.getElementById("ganadorMano").innerHTML="Gano "+ nombreJugador;
      ronda ++;
      }
      else if(ganador==cpu){
      ganoCpu ++;
      document.getElementById("ganadorMano").innerHTML="Gano Cpu";
      ronda ++;
      }
      else {
      document.getElementById("ganadorMano").innerHTML="Empate";
      }
    }
    marcador();
  }
}
// funcion para el boton de reiniciar 
function limpiar(){
  ronda=0;
  ganoCpu=0;
  ganoUsuario=0;
  usuario="";
  document.getElementById("juego").style.display="block";
  document.getElementById("ganador").style.display="none";
  document.getElementById("perdedor").style.display="none";
  document.getElementById("textoUsuario").innerHTML="";
  document.getElementById("textoCpu").innerHTML="";
  document.getElementById("ganadorMano").innerHTML="";
  document.getElementById("ronda").innerHTML="";
  document.getElementById("puntosUsuario").innerHTML="";
  document.getElementById("puntosCpu").innerHTML="";
  document.getElementById("ganador").innerHTML="";
  botones.forEach(function (button){
  button.classList.remove("selected");
  })
}
// funcion que selecciona la opcion elejida por el usuario 
botones.forEach(function (button) {
  button.addEventListener("click", function () {
    botones.forEach(function (otherButton) {
      otherButton.classList.remove("selected");
    });

    button.classList.add("selected");
  });
});