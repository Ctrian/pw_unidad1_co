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

    if (persona.ciudad === 'Quito') {
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

    const ciudadano = {
        nombre: 'Cristian',
        apellido: 'Olivares',
        direccion: {
            ciudadPrincipal: 'Av. Simon Bolivar',
            calleSecundaria: 'Calle J',
            numeracion: '1678',
            barrio: {
                referencia: 'Frente a la casa verde'
            }
        }
    }

    console.log(ciudadano); // {nombre: 'Cristian', apellido: 'Olivares', direccion: {…}}
    console.log(ciudadano.nombre); // Cristian
    console.log(ciudadano.direccion); // {ciudadPrincipal: 'Av. Simon Bolivar', calleSecundaria: 'Calle J', numeracion: '1678', barrio: {…}}
    console.log(ciudadano.direccion.calleSecundaria); // Calle J
    ciudadano.direccion.calleSecundaria = 'Calle K'; // Cambiando el valor de un atributo
    console.log(ciudadano); // {nombre: 'Cristian', apellido: 'Olivares', direccion: {…}}

    const arregloEstudiantes2 = [
        { nombre: 'Cristian', apellido: 'Olivares' }, { nombre: 'Lone', apellido: 'Davis' }
    ];
    console.log(arregloEstudiantes2); // [{nombre: 'Cristian', apellido: 'Olivares'}, {nombre: 'Lone', apellido: 'Davis'}]

    console.log(arregloEstudiantes2[0].apellido); // {apellido: 'Olivares'}

    /*Desestructuración de arreglos */
    /* el criterio de desustructuración es la posición */
    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    const [color1, color2, color3, color4, color5] = colores; // Desestructurando el arreglo
    console.log(color1); // Amarillo
    console.log(color2); // Azul
    console.log(color3); // Rojo
    console.log(color4); // Verde
    console.log(color5); // Naranja

    const [c1, c2] = colores; // Desestructurando el arreglo
    console.log(c1); // Amarillo
    console.log(c2); // Azul

    const [, , ctres] = colores; // Desestructurando el arreglo
    console.log(ctres); // Rojo

    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    console.log(c01); // Amarillo

    desestructuraccionArreglos(colores); // Desestructurando el arreglo

    const [, p2, p3, p4, p5, p6, p7, p8, p9, p10] = desestructuraccionArreglos2();
    console.log(p2);
    console.log(p3); // Rojo Verde
    console.log(p10); // Naranja

    // desestructuracion por operador rest
    console.log('Desestructuracion por operador rest');
    const [p1, ...resto] = desestructuraccionArreglos2();
    console.log(p1); // Amarillo "p1 se queda con el primer valor"
    console.log(resto); // ['Azul', 'Rojo', 'Verde', 'Naranja']

    /*Desestructuración de objetos */
    const auto = {
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2020,
        color: 'Rojo'
    }

    /* el criterio de desustructuración es el nombre de la variable */
    const { marca, color, anio } = auto; // Desestructurando el objeto
    console.log(marca); // Toyota

    const { anio1 } = {
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2020,
        color: 'Rojo'
    }

    console.log(anio1);
    desestructuraccionObjetos(auto);

    console.log('COLORES');
    desestructuraccionObjetos2(auto, auto); // Desestructurando el objeto

    const universidad = {
        nombre: 'Universidad Central',
        direccion: 'Av. América',
        rector: {
            nombre: 'Daniel',
            apellidoR: 'Teran'
        }
    }

    const {rector, nombreR} = universidad;
    console.log(rector);
    const {apellidoR} = rector;
    console.log(apellidoR); // Teran

    const universidad2 = {
        nombre2: 'Universidad Central',
        direccion2: 'Av. América',
        rector2: {
            nombreR2: 'Daniel',
            apellidoR2: 'Teran'
        }
    }

    const {nombre2, rector2:{apellidoR2}} = universidad2;
    console.log(apellidoR2);

    /*Desestructuracion por operador rest*/
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'Corolla',
        anioR: 2020,
        colorR: 'Rojo'
    }

    const {marcaR, ...restoAuto} = autoR; // Desestructurando el objeto
    console.log(marcaR); // Toyota
    console.log(restoAuto); // {modeloR: 'Corolla', anioR: 2020, colorR: 'Rojo'}

}

function desestructuraccionArreglos(k1, k2, k3) {
    console.log(k1);
    console.log(k2);
    console.log(k3);
}

function desestructuraccionArreglos2() {
    const colores = ['Rosado', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    return colores;
}

function desestructuraccionObjetos(objeto) {
    console.log(objeto);
}

function desestructuraccionObjetos2({marca, color}) {
    console.log(marca);
    console.log(color);
}