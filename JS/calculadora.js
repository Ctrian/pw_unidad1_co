const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        return "Error: División por cero no permitida.";
    }
    return num1 / num2;
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;
    if (tipo === SUMA) {
        resultado = sumar(num1, num2)
    }
    if (tipo === RESTA) {
        resultado = restar(num1, num2)
    }
    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(num1, num2)
    }
    if (tipo === DIVISION) {
        resultado = dividir(num1, num2)
    }
    document.getElementById('id_resultado')
        .innerText = document.getElementById('id_resultado')
            .innerText + resultado.toString();
}

const fundamentos = () => {
    console.log('Fundamentos JS');

    /*Tipos de variables
  var (obsoleto/antiguo)
  let (varaibles cambiantes)
  const (variables constantes, no se pueden cambiar)
  */
    let nombre = '10';
    let numero = 10;
    let arreglo = [1, 2, 3, 4, 5];

    const nombrec = '10';
    console.log(arreglo);
    console.log('texto de prueba');

    /*Arreglos */
    const diasLaborales = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    console.log(diasLaborales);
    console.log(diasLaborales[0]); // Lunes

    console.log(diasLaborales[10]); // Undefined
    let valor = '';
    console.log(valor); // vacio o "Empty String :0", depende del navegador
    console.log(diasLaborales[0] + ' ' + diasLaborales[1]); // Lunes Martes

    diasLaborales[0] = 'Lunes 2.0'; // Cambiando el valor de un arreglo
    diasLaborales.push('Sábado'); // Agregando un nuevo valor al final del arreglo
    diasLaborales.unshift('Días'); // Agregando un nuevo valor al inicio del arreglo
    console.log(diasLaborales); // ['Días', 'Lunes 2.0', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosPares = [2, 4, 6, 8];

    const numeros = numerosImpares.concat(numerosPares); // Uniendo dos arreglos
    console.log(numeros); // [1, 3, 5, 7, 9, 2, 4, 6, 8]

    /*Sentencias de control */
    for (const dia of diasLaborales) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Gracias a Dios es viernes');
        } else {
            console.log('No es viernes');
        }

        if (dia !== 'Viernes') {
            console.log('Día normal');
        } else {
            console.log('Día de salida');
        }

    }

/*Manejo de objetos */
const persona = {
    nombre: 'Cristian',
    apellido: 'Olivares',
    edad: 24,
    genero: 'Elevador Hidraulico',
    ciudad: 'Quito'
}

console.log(persona); // {nombre: 'Cristian', apellido: 'Olivares', edad: 24, genero: 'Masculino', ciudad: 'Quito'}
console.log(persona.nombre); // Cristian

/*seteo de atributos*/
persona.apellido = 'Olivares 2.0'; // Cambiando el valor de un atributo

console.log(persona); // Olivares 2.0

if(persona.ciudad === 'Quito') {
    console.log('Eres de Quito, la capital del Ecuador');

}

const estudiante1 = {
    nombre: 'Cristian',
    apellido: 'Olivares',
    edad: 24,
    genero: 'Masculino',
    ciudad: 'Quito'
}

const estudiante2 = {
    nombre: 'David',
    apellido: 'Boada',
    edad: 29,
    genero: 'Masculino',
    ciudad: 'Quito'
}

const estudiante3 = {
    nombre: 'Andrés',
    apellido: 'Lara',
    edad: 25,
    genero: 'Masculino',
    ciudad: 'Quito'
}

const estudiantes = [estudiante1, estudiante2, estudiante3]; // Arreglo de objetos
console.log(estudiantes); // [{nombre: 'Cristian', apellido: 'Olivares', edad: 24, genero: 'Masculino', ciudad: 'Quito'}, {nombre: 'Cristian', apellido: 'Olivares', edad: 24, genero: 'Masculino', ciudad: 'Quito'}, {nombre: 'Cristian', apellido: 'Olivares', edad: 24, genero: 'Masculino', ciudad: 'Quito'}]

console.table(estudiantes); // Tabla de objetos
}