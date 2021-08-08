var hello = 'Hello';
//podemos REASIGNAR sobre VAR, pero no sobre LET y CONST
var hello = 'Hello +' 
let world = 'Hello World';
const helloWorld = 'Heeeelloo';


const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction();

//MALAS PRACTICAS: 
const helloWorld = () => {
    globalVar = "I am global"
}

helloWorld()
console.log(globalVar)

const anotherFunc = () => {
    var localVar = globalVar = 'I am Global';
}

anotherFunc()
console.log(globalVar)