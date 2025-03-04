 Esercizi freecodecamp

 Find the Length of a String


let MyName = 0;
const firstName = "michele";

MyName = firstName;

console.log (MyName.length);


 Use Bracket Notation to Find the First Character in a String


let MyName = "";
const firstName = "michele";

MyName = firstName[0];

console.log (MyName);

 Understand String Immutability


let word = "Jello World";
let wordSub = "Hello word";

word = wordSub;

console.log (wordSub);

 Use Bracket Notation to Find the Nth Character in a String


const lastName = "Lovelace";

const third = lastName[2];

console.log (third);

 Use Bracket Notation to Find the Last Character in a String


const lastName = "Lovelace";

const third = lastName[lastName.length -1];

console.log (third);

 Use Bracket Notation to Find the Nth-to-Last Character in a String


const lastName = "Lovelace";

const third = lastName[lastName.length -3];

console.log (third);

 Word Blanks


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " is" + myAdjective + " and " + myVerb + " very " + myAdverb;  Change this line

console.log (wordBlanks);

 Store Multiple Values in one Variable using JavaScript Arrays


const array = ["michele", 24];

console.log (array);

 Nest one Array within Another Array


const myArray = [["Bulls", 23], ["White Sox", 45]];

console.log(myArray)

 Access Array Data with Indexes


const array = [50,60,70];
const myData = array[2];

console.log (myData);

 Modify Array Data With Indexes


const array = [50,60,70];
array[0] = 15;

console.log (array);

 Access Multi-Dimensional Arrays With Indexes


const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];

  const myData = myArray[0][1];

  console.log (myData);


 Manipulate Arrays With push()


const array = [1,2,3,4,5];

array.push(6);   push permette di aggingere un altro elemento all'array

console.log (array);

const myArray = [[10,20,30,40,50]]
myArray.push([60,70,80,90,100]);

console.log (myArray);

 Manipulate Arrays With pop()


const array = [1,2,3,4,5];
array.pop();     pop permette di togliere l'ultimo elemento 

console.log (array);

 Manipulate Arrays With pop()

const myArray = [[1,2,3,4,5], [6,7,8,9,10]];
const removeArray = myArray.pop();

console.log (myArray);
console.log (removeArray);

var array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const remove = array.pop();
console.log (array);
console.log (remove);

 Manipulate Arrays With shift()


const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const remove = array.shift();        shift permette di togliere l'elemento iniziale dell'array
console.log (array);
console.log (remove);

 Manipulate Arrays With unshift()


const array = [
    [4,5,6],
    [7,8,9]
];

const add = array.unshift([1,2,3])

console.log (array);

 Shopping List


const myList = [
    ["Chocolate Bar"],
    [15, 15, 15],
    ["Chocolate Bar", 15, true]
];

 Write Reusable JavaScript with Functions


function reusableFunction () {
    console.log ("hi, world");
}

reusableFunction();

 Passing Values to Functions with Arguments


var sum;

function functionWithArgs (a,b) {
    sum = a + b;
}

functionWithArgs (10, 10);

console.log (sum);

 Return a Value from a Function with Return


function timesFive (num) {
    return num + 3;
}

const answer = timesFive (5);

console.log (answer);

 Understanding Undefined Value returned from a Function


function addThree (sum_1) {
    return sum_1 += 3;
}

function addFive (sum_2) {
    return sum_2 += 5;
}

addThree();
addFive ();

const answer_1 = addThree(0);
const answer_2 = addFive(0);

var total;

function sum (answer_1, answer_2) {
    return answer_1 + answer_2;
}

sum ();

const answer_3 = sum (5,3);

console.log ("il risultato di addThree è:", answer_1);
console.log ("il risultato di addFive è:", answer_2);

console.log ("la somma totale è:", answer_3);

 Assignment with a Returned Value


var processed = 2;

function processArg (num) {
    return (num + 3) / 5;
}

processed = processArg(7);

console.log (processed);

 Use Conditional Logic with If Statements


function trueOrFalse (number) {
    if (number > 3) {
        return "true";
    }
    else {
        return "false";
    }
}

console.log (trueOrFalse(2));

 Practice comparing different values


function compareEquality(a, b) {
    if (a === b){
        return "equal";
    }
    else {
        return "not equal";
    }
}

compareEquality(10, 10);

console.log (compareEquality(10, 10));

 Comparison with the Inequality Operator


function testNotEqual(val) {
  if (val != 99 ) {
    return "Not Equal";
  }
  return "Equal";
}

console.log (testNotEqual(1563545));

 Comparison with the Greater Than Operator


function testGreaterThan(val) {
    if (val > 10) {
        return "it's too high"
    }
    else if (val < 10) {
        return "it's too low"
    }
    else if (val === 10) {
        return "correct"
    }
}

console.log (testGreaterThan(10));

function word (string) {
    if (string === "michele"){
        return "true"
    }
    else {
        return "false";
    }
}

console.log (word("Antonio"));

 Golf Code


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore (par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes <= par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    
    else {
        return "change me";
    }
}

console.log(golfScore(4,4));

 Selecting from Many Options with Switch Statements


function caseInSwitch (val) {
    let answer = "";
    switch (val) {
        case 1:
            console.log ("alpha");
            break;
        case 2:
            console.log ("beta");
            break;
        case 3:
            console.log ("gamma");
            break;
        case 4:
            console.log ("delta");
            break;
    }
    return answer;
}

caseInSwitch(4);


function cashBack (val) {
    let answer = "";
    switch (val) {
        case 1:  biscotti
        console.log ("i biscotti costano 1.99 €");
        break;
        case 2:  latte
        console.log ("il latte costa 1.50 €");
        break;

    }
    return answer;
}
cashBack(1);

 Adding a Default Option in Switch Statements


function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            console.log ("apple");
            break;
        case "b":
            console.log ("bird");
            break;
        case "c":
            console.log ("cat");
            break;
        default:
            console.log ("this option is not valid");
            break;
    }
    return answer;
}
switchOfStuff("a");

 Returning Boolean Values from Functions


function isEqual (a, b) {
 if(a === b) {
    return true;
 }
 else {
    return false;
 }
}

console.log (isEqual(20, 10)); 


function isEqual (a, b) {
    return a === b;
}

console.log (isEqual(10, 10)); 

 Return Early Pattern for Functions


function abTest (a, b) {
    if (a < 0 || b < 0) {
        console.log ("la radice non può essere calcolata");
    }
    else {
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
}

console.log (abTest(2, 2));

 Build JavaScript Objects


const myDog = {
    name: "Sghizzo",
    "legs": 4,
    "tails": 1,
    "enemis": ["cats", "water"]
};

console.log (myDog.name);   con l'espressione myObject. + nome della variaibile, si può chiamare la variaibile all'interno dell'oggetto

 Accessing Object Properties with Bracket Notation


const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj["an entree"];    

console.log (entreeValue);

 Accessing Object Properties with Variables


const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
}; 

const myDogs = "Hunter";
const myBreed = dogs[myDogs];

console.log (myBreed);

 Updating Object Properties


const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

console.log (myDog.name);

 Add New Properties to a JavaScript Object

 const myDog = {
     "name": "Coder",
     "legs": 4,
     "tails": 1,
     "friends": ["freeCodeCamp Campers"]
 };

 myDog.race = "bulldog";


const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "race": "bulldog"
};

console.log (myDog);

 Delete Properties from a JavaScript Object


const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.bark;

console.log (myDog);

 Using Objects for Lookups


function phoneticLookup (val) {
t    let answer = "";

    const article = {
        "title": "How to create objects in JavaScript",
        "author": "Kaashan Hussain",
        "link": "https:www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
        "language": "JavaScript",
        "tags": "TECHNOLOGY",
        "createdAt": "NOVEMBER 28, 2018"
    };


}

 Testing Objects for Properties


function myObj () {

}

const Object = {
    top: "hat",
    bottom: "pants" 
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

 Manipulating Complex Objects    


const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CD",
          "8T",
          "LP"
        ],
        "gold": true
      }
  ];

 Accessing Nested Objects


const myStorage = {
    "car": {
      "inside": {
        "glove": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
const gloveBoxContents =  myStorage.car["outside"].trunk;

console.log (gloveBoxContents);

 Accessing Nested Arrays


const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
    const word = myPlants[0].list[1];
    console.log (word);

 Iterate with JavaScript While Loops


const array = [];
var i = 5;

while (i >= 1) {
    array.push(i);
    i--;
}

console.log (array);


const myArray = [];
var i = 0;

while (i <= 5) {
    myArray.push(i)
    i++;
}

myArray.pop(i);         
console.log (myArray);

 Iterate with JavaScript For Loops


const myArray = [];

for (let i = 0; i <= 5; i++) {
    myArray.push(i);
}

console.log (myArray);


const myArray = [];

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        myArray.push(i);
    }
}

console.log (myArray);


const myArray = [];

for (let i = 10; i >= 0; i--) {
    if (i % 2 === 1) {
        myArray.push(i);
    }
}

console.log (myArray);


 Iterate Through an Array with a For Loop


const array = [10, 5, 5];
var total = 0;

for (let i = 0; i < array.length; i++) {
    total += array[i];
}

console.log (total);

 Nesting For Loops
 Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr


function  multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
}

console.log (multiplyAll([[2],[3],[1]]));

 Iterate with JavaScript Do...While Loops


const array = [];
let i = 10;

do {
    if (i % 2 === 0) {
        array.push(i);
    }
    i++;

}
while (i <= array.length)

console.log (array);

const myArray = [];
let i = 0 ;

do {
    if (i % 2 === 1) {
        myArray.push(i);
    }
    i++;
}
while (i <= 10);

console.log (myArray);

 Replace Loops using Recursion
 Scrivere una funzione ricorsiva, sum(arr, n), che restituisca la somma dei primi nelementi di un array arr.


function sum (arr, n) {
 if (n <= 0) {
    return 0;
 }
 else {
    return sum (arr, n-1) + arr[n-1];
 }
}

console.log (sum([2, 3, 4, 5], 3));

 Profile Lookup


const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name){
            if (prop in contacts[i]){        la propietà in restituisce true se la proprietà specificata di trova all'interno dell'oggetto
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
            return "No such contact";
        }
    }
}

console.log(lookUpProfile("Kristian", "address"));


const myDog = {
    name: "Sghizzo",
    "legs": 4,
    "tails": 1,
    "enemis": ["cats", "water"]
};

console.log (myDog.name); 


  function isAnagram(word1, word2) {
      if (word1.length !== word2.length) {
          return false
      }
      else {
          return true
      }
  }

  console.log(isAnagram('seettttt', 'otto'));



  function palindrome() {
     return true;
   }
 ("eye");    

 const array = [10, 5, 5];
 var total = 0;

 for (let i = 0; i < array.length; i++) {
     total += array[i];
 }

  console.log (total);

 metodo classico

 const arrayOne = [1,2,3,4,5,6,7,8,9,10];
 const arrayTwo = [];

  for(let i = 0; i <= arrayOne.length; i++) {
     if (arrayOne[i] > 5) {
         arrayTwo.push(arrayOne[i])
     }
  }
  console.log (arrayTwo)

 metedo filter

 const arrayTwo = arrayOne.filter((x) => x > 5)
 console.log (arrayTwo);

 var total = 0;
 var first = [1,2,3,4,5,6,7,8,9,10];
 var second = [1,2,3,4,5,6,7,8,9,10];

     for (let a = 1; a < first.length; a++) {
         for (let b = 1; b < second.length; b++) {
           total = first[a] + second[b]
         }
       }

   console.log(total)