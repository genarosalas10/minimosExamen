'use strict'

//No cambies esta línea o el test no funcionará
window.addEventListener('load', iniciar)

/**
  Función que se llamará al cargar la página.
**/
function iniciar() {
 
let eje1 =document.getElementById('iEj1')
eje1.onchange=registrar.bind('windows',1)
eje1.onblur=registrar.bind('windows',2)
eje1.onmousemove=registrar.bind('windows',3)
eje1.onclick=registrar.bind('windows',4) 

let formulario=document.forms[0]
formulario.onsubmit=validar
document.getElementById('iF1').onchange=validarFecha
document.getElementById('iF2').onchange=validarFecha
gestionarCookie()
}


/* function registrar2(valor) {
  switch (valor.type) {
    case 'change':
      console.log(1)
      return 1;
    case 'blur':
      console.log(2)
      return 2;
    case 'mousemove':
      console.log(3)
      return 3;
    case 'click':
      console.log(4)
      return 4;
  }
} */

function validar(evento) {
  evento.preventDefault()
  console.log('validar')
  let lista =document.getElementById('sLista')
  if(lista.value!="")
  {
    document.forms[0].submit()
  }
}
/*   console.log(document.getElementById('sLista').selectedIndex[1].value); 
console.log(document.getElementById('sLista')[1].value);  */

function validarFecha(evento) {
  let fecha=document.getElementById(evento.target.id).value.split('-')
  let fechaActual = new Date()
  let anio = parseInt(fecha[0])
  if( fechaActual.getFullYear() != anio)
  {
    let dia=fechaActual.getDate()
    let ano=fechaActual.getFullYear()
    let mes=fechaActual.getMonth()+1
    if(dia<10)
    {
      dia='0'+dia
    }
    if(mes<10)
    {
      mes='0'+mes
    }
    document.getElementById(evento.target.id).value=ano+'-' +mes+'-'+dia

  }

}

function gestionarCookie() {
  if (document.cookie.includes('cookie1')) {
    let cambio = document.cookie.replace(/=/g, ' ') //cambia los = por espacios
    let cookies = cambio.split(' ') //crea un array por los espacios
    let posicion = cookies.indexOf('cookie1') //busca la posicion de la cookie
    let resultado = cookies[posicion] + `=${cookies[posicion + 1]}` //alamacena la cookie junto con su valor
    console.log(resultado);
    return resultado
  } else {
    document.cookie = 'Valor1; Secure'
  }
}