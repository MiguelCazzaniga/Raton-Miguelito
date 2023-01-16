//
//Funciones 
//

//Mover ojitos
function moverOjitos(){
    let ojitos2=document.getElementById("pupilas");
   ojitos2.classList.toggle("mueveOjito");
} 
//Mover nariz
function moverNariz(){
    let nariz2=document.getElementById("narizota");
   nariz2.classList.toggle("mueveNariz");
} 

//Mover orejas
function moverOrejas(){
   let orejaIzq=document.getElementById("orejaI");
   orejaIzq.classList.toggle("mueveOreja");
   let orejaDer=document.getElementById("orejaD");
   orejaDer.classList.toggle("mueveOrejaDer");
} 

//Terminar
function terminar(){
   let terminamos=document.getElementById("orejaI");
   terminamos.classList.add("salida");

   terminamos=document.getElementById("orejaD");
   terminamos.classList.add("salida");

   terminamos=document.getElementById("cabeza");
   terminamos.classList.add("salida");

   terminamos=document.getElementById("rostro");
   terminamos.classList.add("salida");
  
   terminamos=document.getElementById("ojos");
   terminamos.classList.add("salida");
  
   terminamos=document.getElementById("pupilas");
   terminamos.classList.add("salida");

   terminamos=document.getElementById("narizota");
   terminamos.classList.add("salida");

   terminamos=document.getElementById("lengua");
   terminamos.classList.add("salida");

   terminamos=document.getElementById("garganta");
   terminamos.classList.add("salida");

   terminamos=document.getElementById("lineas");
   terminamos.classList.add("salida");

   terminamos=document.getElementById("titulo");
   terminamos.remove();

   terminamos=document.getElementById("orejaI");
   terminamos.classList.add("ocultar");
   
   terminamos=document.getElementById("orejaD");
   terminamos.classList.add("ocultar");

   terminamos=document.getElementById("narizota");
   terminamos.classList.add("ocultar");

   terminamos=document.getElementById("pupilas");
   terminamos.classList.add("ocultar");


   cambiaA3d();

} 

//cambia a 3D
function cambiaA3d(){
   let hijo=document.createElement("div");
   cambiar=document.getElementById("mickey").appendChild(hijo).setAttribute("id","mickeyHijo");

   
  
   hijo=document.createElement("h2");
   cambiar=document.getElementById("mickeyHijo").appendChild(hijo).innerText="Proyecto ratón Miguelito";
 
   

}

//Control de los ojitos
let ojitos=document.getElementById("ojitos");
ojitos.addEventListener("click",moverOjitos);

//Control de los nariz
let naricita=document.getElementById("nouse");
naricita.addEventListener("click",moverNariz);

//Control de las orejas
let orejitas=document.getElementById("orejas");
orejitas.addEventListener("click",moverOrejas);

//Control del Este No
let teLoDije=document.getElementById("esteNo");
teLoDije.addEventListener("click",terminar);