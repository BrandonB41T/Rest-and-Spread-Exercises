// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0);
}


// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

const findMin = (...vals) => {
    if (vals.length === 0) {
        return undefined;
    } else {
        return Math.min(...vals);
    }
}

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});


// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => {
    const doubles = args.map((arg) => arg * 2);
    return [...arr, ...doubles];
}





// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.



/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     
// }

const removeRandom = (items) => {
    const randIdx = Math.random() * items.length;
    const newArr = [...items];
    newArr.splice(randIdx, 1);
    return newArr;
}


/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
};


/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}