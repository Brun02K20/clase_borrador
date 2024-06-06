import personas from "./personas.json" assert { type: "json" };
const vacioAux = []

const edadPromedio = (array) => {
    if (array.length === 0) {
        return "Error, tu array esta vacio"
    }
    let acumulador = 0;
    const cantidadPersonas = array.length;
    array.forEach(persona => {
        acumulador += persona.edad;
    });
    const promedioEdad = Math.ceil(acumulador / cantidadPersonas);
    return `El promedio de edad de todas las personas es de ${promedioEdad}`;
}

const personaMasJoven = (array) => {
    if (array.length === 0) {
        return "Error, tu array esta vacio"
    }
    const joven = array.reduce((personaMasJoven, personaActual) => {
        return (personaActual.edad < personaMasJoven.edad) ? personaActual : personaMasJoven;
    }, array[0]);

    return `La persona mas joven se llama ${joven.nombre} ${joven.apellido}`
}

const nombresGomez = (array) => {
    if (array.length === 0) {
        return "Error, tu array esta vacio"
    }
    const personasGomez = array.filter(persona => persona.apellido === 'Gomez');
    if (personasGomez.length === 0) {
        return "Nadie se llama gomez"
    }
    const nombres = personasGomez.map(persona => persona.nombre);
    nombres.sort();
    const nombresFormateados = nombres.join(', ');
    return `Los nombres de las personas que se apellidan Gomez son: ${nombresFormateados}`;
};

const sumarEdadConCondiciones = (array) => {
    if (array.length === 0) {
        return "Error, tu array esta vacio"
    }
    let sumatoriaEdad = 0;
    array.forEach(persona => {
        if (persona.nombre.length % 2 === 0 && persona.apellido.length % 2 !== 0) {
            sumatoriaEdad += persona.edad;
        }
    });
    return `La suma de las edades de las personas que cumplen la condicion es de: ${sumatoriaEdad}`;
};

const estadisticasPersonas = (array) => {
    if (array.length === 0) {
        return "Error, tu array esta vacio"
    }
    const estadisticas = array.reduce((result, persona) => {
        if (persona.edad >= 18) {
            result.mayores = (result.mayores) + 1;
        } else {
            result.menores = (result.menores) + 1;
        }

        // Verificar apellido y contar según la primera o segunda mitad del alfabeto
        const primeraLetraApellido = persona.apellido.charAt(0).toUpperCase();
        if (primeraLetraApellido >= 'A' && primeraLetraApellido <= 'L') {
            result.primeraMitad = (result.primeraMitad) + 1;
        } else {
            result.segundaMitad = (result.segundaMitad) + 1;
        }

        return result;
    }, {
        mayores: 0,
        menores: 0,
        primeraMitad: 0,
        segundaMitad: 0
    });

    const estadisticasJSON = JSON.stringify(estadisticas, null, 2);
    // JSON.stringify(estadisticas, null, 2).El segundo argumento null es un "replacer", que en este caso 
    // no estamos usando, y el tercer argumento 2 es el espacio de indentación para hacer que el JSON sea más 
    // legible(opcional, puedes usar null si no deseas indentación). Replacer es una función opcional o un array que determina cómo se transforma 
    // el valor antes de ser incluido en el JSON.

    // Ejemplo, supongamos que tengo 
    // {
    //     mayores: 0,
    //     menores: 0,
    //     primeraMitad: 0,
    //     segundaMitad: 0,
    //     otraProp: 0
    // }, y quiero sacer ese otraProp, el replacer seria asi: 
    // const replacer = ["mayores", "menores", "primeraMitad", "segundaMitad"]
    // const estadisticasJSON = JSON.stringify(cantidadPersonasPorApellido, replacer, 2);

    return estadisticasJSON;
};


const apellidosEstadisticas = (array) => {
    if (array.length === 0) {
        return "Error, tu array esta vacio"
    }
    const cantidadPersonasPorApellido = array.reduce((result, persona) => {
        switch (persona.apellido) {
            case "Gomez":
                result.Gomez = result.Gomez + 1;
                break;
            case "Ramírez":
                result.Ramirez = result.Ramirez + 1;
                break;
            // Puedes añadir más casos según los apellidos que necesites
            default:
                break;
        }
        return result;
    }, {
        Gomez: 0,
        Ramirez: 0,
    })
    const estadisticasJSON = JSON.stringify(cantidadPersonasPorApellido, null, 2);
    return estadisticasJSON;
}

console.log(edadPromedio(personas))
console.log(personaMasJoven(personas))
console.log(nombresGomez(personas))
console.log(sumarEdadConCondiciones(personas))
console.log(estadisticasPersonas(personas))
console.log(apellidosEstadisticas(personas))