// Selecciono los botones
const numero = document.querySelectorAll('.boton-numero');
const operador = document.querySelectorAll('.boton-opera');
const igual = document.querySelector('.boton-igual');
const borra = document.querySelector('.boton-borrar');
let resultado = document.querySelector('#resultado');
// variables para las operaciones
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

// Leo cada uno de los valores de los números, operadores, igual y borrar
for (let i = 0 ; i < numero.length; i++){
  numero[i].addEventListener('click', function(){
    //alert(numero[i].value);
    introducirNumero(numero[i].value);
  })
}

for (let j = 0 ; j < operador.length; j++){
  operador[j].addEventListener('click', function(){
    //alert(operador[j].value);
    operacionAritmetica(operador[j].value);
  })
}

igual.addEventListener('click', calcular);
borra.addEventListener('click', borrar);


// Función introducir número
function introducirNumero(numero){
  operacionActual = operacionActual.toString() + numero.toString();
  resultado.value = operacionActual;
}

// Función borrar pantalla y memoria
function borrar(){
  operacionActual = '';
  operacionAnterior = '';
  operacion = undefined;
  resultado.value = operacionActual;
}

// Funciones para las operaciones aritméticas
function operacionAritmetica(op){
  if (operacionActual === ''){
    return;
  }
  if (operacionAnterior !== ''){
    calcular();
  }
  operacion = op.toString();
  operacionAnterior = operacionActual;
  operacionActual = '';
}

function calcular(){
  let calculo;
  const anterior = parseFloat(operacionAnterior);
  const actual = parseFloat(operacionActual);
  if(isNaN(anterior) || isNaN(actual)){
     return;
  }
  switch(operacion){
    case '+':
      calculo = anterior + actual;
      break;
    case '-':
      calculo = anterior - actual;
      break;
    case 'x':
      calculo = anterior * actual;
      break;
    case '/':
      calculo = anterior / actual;
      break;
    default: 
      return;
  }
  operacionActual = calculo;
  operacion = undefined;
  operacionAnterior = '';
  resultado.value = operacionActual;
}