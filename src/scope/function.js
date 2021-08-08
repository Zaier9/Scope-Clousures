const fruits = () => {
    var fruit = 'apple';
    console.log(fruit)
};

fruits()
console.log(fruit) //No puede acceder porque la varible esta definida dentro de una funcion.


//Las variables asignadas con LET y CONST no pueden ser reasignadas dentro de un mismo ámbito
const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2;
    console.log(x)
    console.log(y)
}

anotherFunction()

