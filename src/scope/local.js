const helloWorld = () => {
    const hello = 'Hello World'
    console.log(hello)
}

helloWorld()
//No se puede acceder a una variable dentro de una funcion porque está en el scope local.
console.log(hello)

//AMBITO LEXICO: En este caso, la variable SCOPE que está asignado dentro de la función no reescribe la variable global.
var scope = "I am Globalllls";

const functionScope = () => {
    var scope = 'I am just local';
    const func = () => {
        return scope
    }
    console.log(func())
}

functionScope()