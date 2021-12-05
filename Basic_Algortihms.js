//ALGORITMOS BASICOS
/*Un algoritmo es una serie de instrucciones paso a paso que describen cómo hacer algo. */

/*Para escribir un algoritmo eficaz, ayuda el dividir un problema en partes más pequeñas y pensar cuidadosamente cómo resolver cada parte con código. Divide y vencerás */

//First challenge
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

//-----------------------
//Invierte la cadena proporcionada.

/*Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.
Tu resultado debe ser una cadena.*/
function reverseString(str) {
  let arrFromStr = str.split("").reverse().join("");
  return arrFromStr;
}

//----------------------------
function factorialize(num) {
  if (!Number.isInteger(num) && num < 0)
    return console.warn("Value must be a positive integer");

  if (num < 1) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

//-------------------------------------------

function findLongestWordLength(str) {
  let arrFromStr = str.split(" ");
  let size = 0;
  for (let i = 0; i < arrFromStr.length; i++) {
    if (arrFromStr[i].length > size) {
      size = arrFromStr[i].length;
    }
  }
  return size;
}

//-------------------------------------------------------------------------------------------
/*Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos. */

function largestOfFour(arr) {
  let arrWithBiggestNumbers = [];
  let biggestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > biggestNumber) {
        biggestNumber = arr[i][j];
      }
    }
    arrWithBiggestNumbers.push(biggestNumber);
    biggestNumber = -Infinity;
  }
  return arrWithBiggestNumbers;
}

//-----------------------------------------
//Using substr() instead of EndsWith()
function confirmEnding(str, target) {
  let checkingWord = str.substr(str.length - target.length, target.length);
  return checkingWord === target;
}

//_-----------------------------------------------------------
/*Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat(). */

function repeatStringNumTimes(str, num) {
  if (!str || !num) return console.warn("You're missing a value");
  if (num < 1) return " ";
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(str);
  }
  return array.join("");
}

//---------------------------------------------------------
function truncateString(str, num) {
  if (str.length > num) {
    return `${str.substr(0, num)}...`;
  }
  return str;
}

//-----------------------------------------------------------------------------
/*Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined. */

function findElement(arr, func) {
  let num = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return num;
}

//-----------------------------------------------------------------------------------------
/*Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.
Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of. */

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

//_----------------------------------------------------------------------------------------------

/*Tienes dos arreglos y un índice.
Copia cada elemento del primer arreglo en el segundo arreglo, en orden.
Comienza insertando elementos en el índice n del segundo arreglo.
Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función. */

function frankenSplice(arr1, arr2, n) {
  let firstArr = [...arr1],
    secondArr = [...arr2];
  secondArr.splice(n, 0, ...firstArr);
  return secondArr;
}

//--------------------------------------------------------------

const getIndexToIns = (arr, num) => {
  if (arr.length === 0) {
    arr.push(num);
    return arr.indexOf(num);
  }
  arr.push(num);
  arr.sort((a, b) => a - b);

  return arr.indexOf(num);
};

//-------------------------------------------------------------------

function mutation(arr) {
  let [firstValue, secondValue] = arr;
  firstValue = firstValue.toLowerCase().split("");
  secondValue = secondValue.toLowerCase().split("");

  return secondValue.every((e) => firstValue.includes(e));
}

//----------------------------------------------------------------

function chunkArrayInGroups(arr, size) {
  let newArr = []; //First we create an empty array, where we will store our 'chunks'
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
  /* The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
Finally, we return the value of arr2.*/
}
