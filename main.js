/*let titulo= "Datos:\n\n"
let nombre= "Renzo"
let apellido= "Valdettaro"
let edad= "19"
let texto= titulo + "nombre:" + nombre + "\n" + "apellido:" + apellido + "\n" + "edad:" + edad;
alert(texto)*/
// promts
/*let nombreIngresado= prompt("ingrese su nombre:")
alert("nombre:")
let importe= prompt("ingrese el valor")
const IVA= 1;21;
let importeIva= importe *IVA;
alert("el importte de la coca es:$" + importeIva);*/
/* console.log("inicio");
let comoTePortaste = "mal";
if (comoTePortaste == "mal") {
    alert("seras castigada");
}

console.log("final");
// equivalencia
let nonbre= prompt("ingrese su nombre:");
if (nonbre == "juan")
alert("bienvenido juancito");
else{
    alert("bienvenido/a:" + nombre);
}
let edad = parseInt(prompt("cual es tu edad:"));
if (edad>=18){
    alert("podes tomar alchol");
}
else{
    alert("no podes tomar alchol gordo puto" + edad + "años")
} 
let nombre= "carlos";
let feliz= false;
alert (nombre + "esta feliz?" + feliz); */
// operadores en js
//clase  3 cadena
/* console.log("inicio");

for (let i=0; i<30; i+=5){
    alert("hola a todos! #" + i);
}
let valorIngresado= parseInt(prompt("ingrese un numero:"));
for (let i=1; i<=10; i++){
    let resultado= valorIngresado * i;
    alert(valorIngresado + "X" + i + "=" + resultado);
}
console.log("final"); */

let edades = [];

while (true) {
  let edad = prompt("Ingresa la edad de minimo 5 personas (pone listo para finalizar):");

  if (isNaN(edad)) {
    break;
  }

  edades.push(Number(edad));
}

if (edades.length === 0) {
  alert("No se ingresaron edades.");
} else {
  let sumaEdades = edades.reduce((total, edad) => total + edad, 0);
  let promedioEdades = sumaEdades / edades.length;

  alert("La edad promedio de las personas registradas es: " + promedioEdades.toFixed(2));
}
