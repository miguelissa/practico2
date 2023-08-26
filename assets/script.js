const piedra="piedra";
const tijeras="tijeras";
const papel="papel";
let usuario;
let cpu;
let jugadas=["piedra", "papel", "tijeras"];
let ganador;
let ronda =0;
let ganoUsuario=0;
let ganoCpu=0;
let nombreJugador= prompt("ingrese el nombre del jugador:")
nombreJugador=nombreJugador.toLocaleUpperCase();

function usuarioPapel(){
  usuario= "papel";
}
function usuarioPiedra(){
  usuario= "piedra";
}
function usuarioTijeras(){
  usuario = "tijeras";
}
function eleccionCpu(){
  let min=0;
  let max=2;
  let num=Math.floor(Math.random()*(max-min+1)+min);
  cpu = jugadas[num];
}
function determinarGanador(a,b){
  if(a===tijeras&& b===papel){
      return a
  } else if (a===tijeras&& b===piedra){
      return b
  } else if(a===papel&& b===tijeras){
      return b;
  } else if (a===papel&& b===piedra){
      return a;
  } else if(a===piedra&& b===tijeras){
      return a;
  } else if (a===piedra&& b===papel){
      return b;
  } 
}
function marcador(){
  document.getElementById("ronda").innerHTML="Ronda: "+ronda;
  document.getElementById("puntosUsuario").innerHTML= nombreJugador + ": "+ganoUsuario;
  document.getElementById("puntosCpu").innerHTML= "Cpu: "+ganoCpu;
  if(ganoCpu==3){
    document.getElementById("ganador").innerHTML= "Cpu Gano!";
  }else if (ganoUsuario==3){
    document.getElementById("ganador").innerHTML= nombreJugador +" GANO!";
  }
}
function jugar(){
  if (usuario != piedra && usuario != papel && usuario != tijeras){
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
function limpiar(){
  ronda=0;
  ganoCpu=0;
  ganoUsuario=0;
  usuario="";
  document.getElementById("textoUsuario").innerHTML="";
  document.getElementById("textoCpu").innerHTML="";
  document.getElementById("ganadorMano").innerHTML="";
  document.getElementById("ronda").innerHTML="";
  document.getElementById("puntosUsuario").innerHTML="";
  document.getElementById("puntosCpu").innerHTML="";
  document.getElementById("ganador").innerHTML="";
}