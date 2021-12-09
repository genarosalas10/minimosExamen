'use strict'

window.onload = iniciar
/**
 * @class La clase iniciar llama a las siguientes funciones cuando se carga el toda la pagina
 */
function iniciar() {

    comprobarE11()

    cambiarE12()

    buscarE13()

    cambiarE14()

    cambiarE15()

    crearSelect()

    crearP()

    let div31 = document.getElementById('div31')
    div31.onclick = function () {
        this.innerHTML = 'CLICK'
    }

    div31.onmouseover = function () {
        this.innerHTML = 'MOUSEOVER'
    }

    div31.ondblclick = function () {
        this.innerHTML = 'DOUBLECLICK'
    }

    div31.onmouseout = function () {
        this.innerHTML = 'MOUSEOUT'
    }

}


function comprobarE11() 
{
    let ancho = document.getElementById('iEj11').getAttribute('width')
    return ancho
}


function cambiarE12() 
{
   //let campo = document.getElementById('iEj12').clientWidth = 37 + 'px' esto es relacionado al posicionamiento
   let ancho = document.getElementById('iEj12').style.width = 37 + 'px'
   return ancho
}

function buscarE13() 
{
    let campo = document.getElementsByTagName('input')[4].value
    return campo
}

function cambiarE14() 
{
    document.getElementById('div14').style.backgroundColor = 'red'
}

function cambiarE15() 
{
    document.getElementsByTagName('div')[1].style.backgroundColor = 'green'
}

function crearSelect() {
    let div2 = document.getElementById('div21')
    let salto = document.createElement('br')
    let opcion = document.createElement('option')
    div2.appendChild(salto)
    let selec = div2.appendChild(document.createElement('select'))
    for (let i = 1; i < 3; i++) {
        selec[i] = selec.appendChild(opcion)
        for (let j = 0; j < selec.length; j++) {
            selec[j].value = j

        }
    }

    selec[0].innerHTML = 'JavaScript'
    selec[1].innerHTML = 'ECMA2'
}


function crearP() {
    let div = document.getElementById('div21')
    let parrafo = document.createElement('p')
    parrafo.classList.add('bonito')
    parrafo.innerHTML = 'Brendan Eich creó JavaScript'
    div.insertBefore(parrafo, div.getElementsByTagName('select')[0])
}


/**
 *
 *
 * @classLa clase Controlador se encarga de controlar el programa
 */
 class Controlador {

    /**
     * Crea una instancia de Controlador que inicializa una instancia de Vista y Modelo
     * @memberof Controlador
     */
    constructor() {
        
        this.vista = new Vista()
        this.modelo = new Modelo()
        this.cambiar()
    }
    //cambia el div insertando los datos del modelo

    /**
     *Muestra con el atributo vista los datos del atributo modelo
     * @return {string} 
     * @memberof Controlador
     */
    cambiar() {
        return this.vista.mostrarDatos(this.modelo.getDatos())
    }

}

/**
 *
 *
 * @class La clase Vista se encarga de monstrar los elementos
 */
class Vista {
    constructor() {

    }
    /**
     * @param {string} texto Recibe un texto que se presentará en el div seleccionado
     * @memberof Vista
     */
    mostrarDatos(texto) {
        let div = document.getElementById('div41')
        div.innerHTML = texto // o `${div.textContent} ${texto}` //no elimina el texto existente

    }
}


/**
 * @class  La clase Modelo guarda los datos del programa
 */
class Modelo {

    /**
     * Crea una instancia de Modelo
     * @memberof Modelo
     */
    constructor() {
        this.datos = 'MVC es un patrón de diseño'
    }
    //devuelve el atributo datos

    /**
     *Método que devuelve el atributo datos de la instancia
     * @return {string} 
     * @memberof Modelo
     */
    getDatos() {
        return this.datos
    }
}