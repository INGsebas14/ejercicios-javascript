var variable = "nombre";
let nombre;
nombre="Camilo";
const apellido = "Rocha";
let nombreCompleto = "Camilo Rocha";
var numero = 25;
var bandera = true;
var simbolo = Symbol("Mi simbolo");

var objeto = {
    nombre : "Norbey",
    apellido : "Muñoz",
    telefono : 3153160759
    }
console.log(objeto);
var autos = ["BMW", "Audi", "volvo"];
console.log(autos);

let a = 3;
let b = 2;
let z = a + b;
console.log(z);

z = a - b;
console.log(z);
z = a * b;
console.log(z);
z = a / b;
console.log(z);
z = a % b;
console.log(z);
z = a ** b;
console.log(z);

let x = 3, y = 4;
let sum = x + y;
console.log(sum);

sum = ++x;
console.log(sum);
sum = y++;
console.log(sum);
sum = --x;
console.log(sum);
sum = y--;
console.log(sum);

let aDos = 1;

// Asignación compuesto
aDos += 3; // a = a + 3
console.log(aDos);
aDos -= 2; // a = a - 2
console.log(aDos);
aDos *= 5; // a = a * 5
console.log(aDos);
aDos /= 3; // a = a / 3
console.log(aDos);
aDos %= 2; // a = a % 3
console.log(aDos);
aDos **= 2; // a = a ** 2
console.log(aDos);

//pagina 23
let aTres = 3, bTres= 2, cTres="3", dTres = 3;
// Igualdad == , se revisa el valor sin importar el tipo
let zTres = (aTres == bTres);
console.log(zTres);
zTres = (aTres == cTres);
console.log(zTres);
// Igualdad estricta ===, se revisa el valor importando el tipo
zTres = (aTres === cTres);
console.log(zTres);
/*Operador Distinto a:*/
// Distinto a
zTres = (aTres != cTres);
console.log(zTres);
//Distinto a estricto
zTres = (aTres !== cTres);
console.log(zTres);

//pagina 24
bTres = 3;
// Menor
zTres = (aTres < bTres);
console.log(zTres);
//Menor o igual
zTres = (aTres <= bTres);
console.log(zTres);
//Mayor
zTres = (aTres > bTres);
console.log(zTres);
//Mayor o igual
zTres = (aTres >= bTres);
console.log(zTres);

//Pagina 25
let resultado = (1 > 2) ? "Verdadero" : "Falso";
console.log(resultado);
let resultadoDos = (1 > 2) ? "Verdadero" : 0;
console.log(resultadoDos);
let numeroDos = 10;
resultado = ( numeroDos % 2 == 0) ? "par" : "impar";
console.log(resultado);

//Pagina 26
let aCuatro = 11;
let minimo = 0;
let maximo = 10;
//AND: Se cumple cuando dos condiciones son verdaderas
if( aCuatro >= minimo && aCuatro <= maximo ){
console.log("El número está en el rango")
}
else{
console.log("El número está fuera del rango")
}
//OR: Se cumple cuando una o dos condiciones de dos es verdadera.
let vacaciones = false;
let diaDescanso = true;
if ( vacaciones || diaDescanso ){
console.log("El padre puede asistir al juego del hijo");
}
else{
console.log("El padre está ocupado");
}