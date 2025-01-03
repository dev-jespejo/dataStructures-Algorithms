/* Give 2 arrays, create a function that
    let's a user know (true/false) whether
    these two arrays contain any common items
    For example:
    const array1 = ['a', 'b', 'c', 'x];
    const array2 = ['z', 'y', 'i'];
    should return false
    
    const array1 = ['a', 'b', 'c', 'x'];
    const array2 = ['z', 'y', 'x'];
    should return true 
*/

// 2 parameters - arrays - no size limit
// return true of false


// function checkCommonItems(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;  // If no common item found, return false 
// }

// const result = checkCommonItems(array1, array2);
// console.log(result);

/* array1 ==> obj {
  a: true,
  b: true,
  c: true,
  x: true
}
*/

// array2[index] === obj.properties


function checkCommonItems(arr1, arr2) {
    // loop through first array and create object
    // where properties === items in the array

    // can we assume always 2 parameters?
    let item = {};
    for (let i = 0; i < arr1.length; i++){
        if(!item[arr1[i]]){
            item[arr1[i]] = true;
        }
    }

    // loop through second array and check if item in second array exists on create object
    for(let i = 0; i < arr2.length; i++){
        if(item[arr2[i]]){
            return true;
        }
    }

    return false;  // If no common item found, return false

}

function checkCommonItems2(arr1, arr2){
    return arr1.some(item => arr2.includes(item));
}

function checkCommonItems3(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.some(item => set1.has(item));
}


module.exports = checkCommonItems2;
