const h1 = document.querySelector('h1'); //querySelector selecciona elementos en el html a nuestro codigo javascript
const input1 = document.querySelector('#calculo1'); // El # es para buscar buscar segun la ID
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

const sumar = function (event) {
    // console.log(event);
    event.preventDefault(); //Esto permite cancelar la recarga
    let calculo= parseInt(input1.value)+parseInt(input2.value);
    console.log(calculo);
    pResult.innerText = "Resultado " + calculo;
}

form.addEventListener('submit', sumar); //Se agrega la acción y la función a ejectutar sin parentesis
