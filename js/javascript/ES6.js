// da notare che ogni metedo può essere usato applicando la struttuta con il for loop 
/* 
    // const arrayOne = [numbers/boolean/string];
// const arrayTwo = [];

//  for(let i = 0; i <= arrayOne.length; i++) {
//     if (arrayOne[i]/conditions) {
//         arrayTwo.method(arrayOne[i])
//     }
//  }
//  console.log (arrayTwo)
*/

// map method: Il metodo map crea un nuovo array popolato con i risultati della chiamata di una funzione 
//fornita su ogni elemento dell'array chiamante.

/*
var array_1 = [1,2,3,4,5];
var array_2 = array_1.map(callback);

function callback (value) {
    return value * 2; 
}

console.log (array_2);
*/

// filter method: Il metodo filter crea una copia di una porzione di un dato array, 
//filtrata fino ai soli elementi dell'array dato che superano il test implementato dalla funzione fornita.

/*
var array_1 = [1,2,3,4,5];
var array_2 = array_1.filter(callback);

function callback (value) {
    return value > 1; 
}

console.log (array_2);
*/

// reduce method: il metodo reduce esegue una funzione di callback "reducer" fornita dall'utente su ciascun elemento della matrice, nell'ordine, passando il valore restituito dal calcolo sull'elemento precedente. Il risultato finale dell'esecuzione del riduttore su tutti gli elementi dell'array è un singolo valore.

/*
var array_1 = [1,2,3,4,5];
var array_2 = array_1.reduce(callback);

function callback (sum, value) {
    return sum + value;
}

console.log (array_2);
*/

// reduce right method: il metedo reduceRight si applica ad una funzione rispetto a un accumulatore e a ciascun valore dell'array (da destra a sinistra) per ridurlo a un singolo valore.

/*
var array_1 = [1,2,3,4,5];
var array_2 = array_1.reduceRight((total, value) => {       // metodo più compatto per scrivere la funzione 
    return total + value;
});

console.log (array_2);
*/

// every method: il metodo every verifica se tutti gli elementi dell'array superano il test implemnetato all'interno della funzione e ne restituisce il valore booleano

/*
var array_1 = [1,2,3,4,5];
var array_2 = array_1.every((value) => {       
    return  value > 0;
});

console.log (array_2);
*/

// some method: il metodo some verfica se almeno un elemento dell'array supera il test implementato dalla funzione fornita. Restituisce true se nell'array è presente almeno un elemento che verifica la verdicità della funzione

/*
var array_1 = [1,2,3,4,5];
var array_2 = array_1.some((value) => {
    return value == 10;
})

console.log (array_2);
*/

// var array_1 = [1,2,3,4,5];
// var array_2 = array_1.map((x) => x*2);

// function callback (value) {
//     return value * 2; 
// }

// console.log (array_2);

// const arrayOne = [1,2,3,4,5,6,7,8,9,10];
// const arrayTwo = [];

//  for(let i = 0; i <= arrayOne.length; i++) {
//     if (arrayOne[i] > 5) {
//         arrayTwo.push(arrayOne[i])
//     }
//  }
//  console.log (arrayTwo)

// var array_1 = [1,2,3,4,5];
// var array_2 = array_1.filter((x) => x > 1);

// console.log (array_2);

// function callback (value) {
//     return value > 1; 
// }

// arrow function: metodo più compatto per scrivere una funzione di questo genere:
/*
    fnuction sum (x,y) {
        sum = x+y
    }
    sum(10,10)
*/

 const x = (x,y) => x+y;

 console.log (x(10, 10));