
// [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let arra1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    //check input
    if(arr1.length === 0 ) {
        return arr2;
    }

    if(arr2.length === 0 ) {
        return arr1;
    }

    while(arra1Item || arr2Item) {
        if(!arr2Item || arra1Item < arr2Item) {
            mergedArray.push(arra1Item);
            arra1Item = arr1[i];
            i++;
        }else{
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }

    
    return mergedArray;
}

function mergeSortedArrays2(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays2([0,3,4], [4,6,30]));



