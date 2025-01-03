const checkCommonItems = require('./containCommonItem');

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

const result = checkCommonItems(array1, array2);
console.log(`¿Tienen elementos comunes?: ${result}`);