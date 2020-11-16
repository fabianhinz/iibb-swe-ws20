
// Bascis

// don't do that >> var a = 1
let a = 1
a = 2
a

const b = 1
// won't work
// b = 2

// Datentypen
let c = "1"
c = 1
c = true

// var fabian = new Teacher()
// fabian.name = "hinz"
// Objekte
const obj = {
    "name": "Hinz",
    "age": 26,
    "printToConsole": function printToConsole() {
        console.log(this.name + " " + this.age)
    }
};
obj.printToConsole();
console.log(obj.name, obj['age']);

// Arrays
const arr = [1, 2, 3, 4, 5];
const lengthOfArray = arr.length;
lengthOfArray;
const secondEl = arr[1];
secondEl;

// filter 
// Array<number>.filter(predicate: (value: number, index: number, array: number[])): number[]
const elementsBiggerThanTwo = arr.slice(1).filter(value => { 
    debugger;
    return value > 2 
});
elementsBiggerThanTwo;

// push
arr.push(10);
const sumOfArr = arr.reduce((acc, current) => {
    debugger;
    return acc += current
}, 0);
sumOfArr;

// Funktionen
const fn = () => { };

// Closures
const useClosure = initialValue => {
    let value = initialValue;
    const increment = () => {
        ++value;
        console.log(value);
    };

    return increment;
};

const closureExample = useClosure(0);
closureExample();
closureExample();
closureExample();

// ohne destructering
const obj_name = obj.name
const obj_age = obj.age

// Destructering
const { age: localVariableAge } = obj

// rest properties
const { age, ...rest } = obj

// spread properties
const mergedObj = { age, ...rest }
mergedObj
obj