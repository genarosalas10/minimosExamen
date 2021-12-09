'use strict'
/**
Suma dos números enteros.
@param {String} a Primer sumando.
@param {String} b Segundo sumando.
@return {Number} La suma de a y b.
**/
function sumar(a, b){
    a=parseInt(a)
    b=parseInt(b)
    return a+b
}

/**
Comprueba si el valor recibido es un número
@param {Object} a Valor a comprobar.
@return {Boolean} Indica si es un número válido.
**/
function comprobar(a){
   if (!isNaN(a)) 
   {
    return true;
  }
  else
  {
    return false
  }
}

/**
 * @param {number} a primer numero pra realizar la multiplicacion
 * @param {number} b segundo numero para realizar la multiplicacion
 * @returns {number} la multiplicacion de a y b
 */
//Función multiplicar
function multiplicar(a,b){
    return a*b;
}
/** Calcula la potencia de un número.
Esta función utiliza la función "multiplicar"
@param {Number} base Base de la potencia
@param {Number} exponente Número natural al que se elevará la base.
@result {Number} Resultado de elevar base a exponente.
**/
function elevar(base, exponente){
    let result=1
    for (let i = 1; i <= exponente; i++) {
        result=multiplicar(result,base)
    }
    return result
}

/** Genera un array con los 10 primeros números enteros
@result {Array} Array con los 10 primeros números enteros.
**/
function generarArray(){
    let numeros=[]
    for (let i = 0; i < 10; i++) 
    {
        numeros[i]=i
    }
    return numeros
}

/** Genera un array bidimensional de números aleatorios enteros entre 1 y 100
@param {Number} filas Número de filas del array.
@param {Number} cols Número de columnas del array
@result {Array} Array bidimensional de números aleatorios
**/
function generarArrayBidimensionalAleatorio(filas, cols){
    let vector1 = [];
    for (let i = 0; i <filas; i++) {
        vector1[i]=[]
        for (let j = 0; j < cols;j++) {
           vector1[i][j] = Math.round(Math.random() * (100 - 1));
        }
    }
    return vector1
}

/** Suma los elementos de un array bidimensional numérico
@param {Array} matriz Array bidimensional numérico.
@return {Number} Suma de los elementos del array.
**/
function sumarArrayBidimensional(matriz){
    let suma=0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length;j++) {
            //suma=sumar(suma,matriz[i][j])
           suma=suma+matriz[i][j] 
        }
    }
    return suma
}

import{Factura} from './factura.js'
let factura= new Factura()
