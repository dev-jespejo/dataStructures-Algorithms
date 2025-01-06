
function reverse(str) {
    // create a function that reverses a string 
    // 'Hi My name is Jespejo' should be : '
    // 'ojepseJ si eman yM iH' 

    // check str
    if(!str || str.length < 2 || typeof str !== 'string')    return str; 

    const reversed = [];
    const totalItem = str.length-1;
    
    for(let i = totalItem; i >= 0; i--) {
        reversed.push(str[i]);
    }

    return reversed.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

function reverse3(str) {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverse4(str) {
    let reversed = '';
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

function reverse5(str) {
    return [...str].reverse().join('');
}

function reverse6(str) {
    return Array.from(str).reverse().join('');
}

const reverse7 = (str) => [...str].reduce((acc, char) => char + acc, '');


console.log(reverse7('Hi My name is Jespejo')); // 'ojepseJ si eman yM iH'