const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi'
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}

fruits()

//En este caso no podremos acceder a las variables declaradas con LET y CONST porque estan declaradas dentro del bloque.
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi'
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}

fruits()

//De esta forma si podemos acceder, al hacer el llamado dentro del bloque.
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi'
        console.log(fruits2)
        console.log(fruits3)
    }
    console.log(fruits1)
}

fruits()

//Las variables declaradas con LET mantienen sus valores en el ambito global y de bloque.
let x = 1;
{
    let x = 2;
    console.log(x)
}

console.log(x)

//En este caso el valor de la variable VAR de bloque se transmitio al ambito global. HAY QUE TENER CUIDADO CON ESTO.
var x = 1;
{
    var x = 2;
    console.log(x)
}

console.log(x)


//En esta iteracion nos va a mostar 10 veces 10 porque esta accediendo al ultimo valor que nos devuelve i
const anotherFunction = () => {
    for (var i = 0; i < 10; i++)
        setTimeout(() =>{
            console.log(i)
        }, 1000)
}

anotherFunction()

//En este caso vemos usando LET es mucho mas amigable y nos va a mostrar cada vez que accede al valor de i
const anotherFunction = () => {
    for (let i = 0; i < 10; i++)
        setTimeout(() =>{
            console.log(i)
        }, 1000)
}

anotherFunction()