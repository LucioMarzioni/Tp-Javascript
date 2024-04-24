//Act 1
const valor1 = 5
const valor2 = 7
const sum = valor1 + valor2
console.log("la suma es de " + sum);

//Act 2
const num1 = 2
const num2 = 8
const num3 = 4
var temp = 0
var temp2 = 0
var mayor = 0
var menor = 0
if (num1 > num2) 
 temp = num1
else 
temp = num2
if (temp > num3)
 mayor = temp
else 
mayor = num3
if (num1 < num2) 
 temp2 = num1
else 
temp2 = num2
if (temp2 < num3)
 menor = temp2
else 
menor = num3
console.log("El numero menor es " + menor + " y el numero mayor es " + mayor)

//Act 3
const pala = "Aguacate"
function contarletras(palabra) {
    return palabra.length;
}
console.log(pala + " tiene " + contarletras(pala) + " letras")

//Act 4
let resto = 33 % 2
if (resto = 0)
 console.log("Es par")
else
console.log("Es impar")

//Act 5
var palabr = "Alcachofa "
var numrep = 3
var palabr = "Alcachofa ".repeat(numrep)
console.log(palabr)

//Act 6
var n1 = 3
var n2 = 7
if (n1 < n2)
for (var entremedio = n1 + 1;entremedio < n2;entremedio++) {
    console.log(entremedio)
}
else
for (var entremedio = n2 + 1;entremedio < n1;entremedio++) {
    console.log(entremedio)
}

//Act 7
var a = 30
var b = 55
var mul = 1
if (a > b) {
 while (mul <= a){
    if (mul % 3 == 0){
     console.log(mul)
    }
    mul = mul + 1
 }
}
else
 while (mul <= b){
    if (mul % 3 == 0){
     console.log(mul)
    }
    mul = mul + 1
 }   

//Act 8
var numer = 100
var mult2 = 1
var mult5 = 1
console.log("Multiplos de 2: ")
while (mult2 < 100) {
    if (mult2 % 2 == 0) {
        console.log(mult2)
    }
    mult2 = mult2 + 1
}
console.log("Multiplos de 5: ")
while (mult5 < 100) {
    if (mult5 % 5 == 0) {
        console.log(mult5)
    }
    mult5 = mult5 +1
}

//Act 9
var array = [5, 9, 24, 21]
var sumas = 0
for (var i = 0 ; i <array.length ; i++) {
    sumas += array[i]
}
console.log("La suma del Array es: " + sumas)

//Act 10
var ay = [2, 35, 22, 6, 7]
var sums = 0
for (var i = 0 ; i <ay.length ; i++) {
    if (ay[i] % 2 == 0) {   
        sums += ay[i]   
    }
}
console.log("La suma de los números pares es: " + sums)

//Act 11
const palabra = "Telefono";
function identificarLetras(palabra) {
    const letras = {};

    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i].toUpperCase(); 
        if (letras.hasOwnProperty(letra)) {
            letras[letra]++;
        } else {
            letras[letra] = 1;
        }
    }
    let resultado = "";
    for (let letra in letras) {
        resultado += `${letra} = ${letras[letra]}, `;
    }
    resultado = resultado.slice(0, -2);

    return resultado;
}
const resultado = identificarLetras(palabra);
console.log(resultado);

//Act 12
const personas = [
    { nombre: 'Lucio', sexoBiologico: 'hombre', edad: 26 },
    { nombre: 'María', sexoBiologico: 'mujer', edad: 32 },
    { nombre: 'Jhosep', sexoBiologico: 'hombre', edad: 25 },
    { nombre: 'Ana', sexoBiologico: 'mujer', edad: 37 },
    { nombre: 'Luis', sexoBiologico: 'hombre', edad: 20 }
];
const promedioEdad = personas.reduce((total, persona) => total + persona.edad, 0) / personas.length;
let mujerMayorEdad = ''
let hombreMenorEdad = ''
let edadMayorMujer = -1
let edadMenorHombre = Infinity

personas.forEach(persona => {
    if (persona.sexoBiologico === 'mujer' && persona.edad > edadMayorMujer) {
        mujerMayorEdad = persona.nombre
        edadMayorMujer = persona.edad
    }

    if (persona.sexoBiologico === 'hombre' && persona.edad < edadMenorHombre) {
        hombreMenorEdad = persona.nombre
        edadMenorHombre = persona.edad
    }
}
)
const mujeres = personas.filter(persona => persona.sexoBiologico === 'mujer')
const promedioEdadMujeres = mujeres.reduce((total, persona) => total + persona.edad, 0) / mujeres.length

console.log("Promedio de edad:", promedioEdad)
console.log("Nombre de la mujer con mayor edad:", mujerMayorEdad)
console.log("Nombre del hombre con menor edad:", hombreMenorEdad)
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres)

//Act 13
const person = [
    { nombre: 'Lucio', sexoBiologico: 'hombre', edad: 26 },
    { nombre: 'Carolina', sexoBiologico: 'mujer', edad: 32 },
    { nombre: 'Jhosep', sexoBiologico: 'hombre', edad: 25 },
    { nombre: 'Surora', sexoBiologico: 'mujer', edad: 37 },
    { nombre: 'Patricio', sexoBiologico: 'hombre', edad: 20 }
]
function calcularPromedioEdad(personas) {
    const totalEdad = person.reduce((total, persona) => total + persona.edad, 0)
    return totalEdad / personas.length
}
function encontrarMujerMayorEdad(personas) {
    let mayorEdad = -1
    let nombre = ''
    person.forEach(persona => {
        if (persona.sexoBiologico === 'mujer' && persona.edad > mayorEdad) {
            mayorEdad = persona.edad
            nombre = persona.nombre
        }
    });
    return nombre;
}
function encontrarHombreMenorEdad(personas) {
    let menorEdad = Infinity
    let nombre = ''
    person.forEach(persona => {
        if (persona.sexoBiologico === 'hombre' && persona.edad < menorEdad) {
            menorEdad = persona.edad
            nombre = persona.nombre
        }
    })
    return nombre
}
function calcularPromedioEdadMujeres(personas) {
    const mujeres = person.filter(persona => persona.sexoBiologico === 'mujer')
    const totalEdadMujeres = mujeres.reduce((total, persona) => total + persona.edad, 0)
    return totalEdadMujeres / mujeres.length;
}
console.log("Promedio de edad:", calcularPromedioEdad(person))
console.log("Nombre de la mujer con mayor edad:", encontrarMujerMayorEdad(person))
console.log("Nombre del hombre con menor edad:", encontrarHombreMenorEdad(person))
console.log("Promedio de edad de las mujeres:", calcularPromedioEdadMujeres(person))

//Act 14
const minimo = 1
const maximo = 20
const divisor = 3
const divisores = obtenerDivisores(minimo, maximo, divisor)
function obtenerDivisores(minimo, maximo, divisor) {
    const divisoresLista = [];

    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisoresLista.push(i)
        }
    }

    return divisoresLista
}
console.log("Divisores:", divisores)