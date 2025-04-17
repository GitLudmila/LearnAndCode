// Solution
function rot13(str) {
    let inStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let outStr = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    return str.replace(/[a-z]/gi, symb => outStr[inStr.indexOf(symb)]);
}

// or

function rot13(str) {
    return str.replace(/[a-z]/ig, function(x){
      return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
    });
}

//or

// function rot13(str) {
//     const input = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     const output = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'];
//     const l = str.length; 
//     str = str.split('');
//     for(let i = 0; i < l; i++){
//         let s = input.indexOf(str[i]);
//         if (s !== undefined && s != -1) {
//             //console.log(`${str[i]} = ${output[s]}`);
//             str[i] = output[s];
//         }
//     }
//     return str.join('');
// }