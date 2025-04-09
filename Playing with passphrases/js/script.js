// Solution

function playPass(s, n) {
    return s.replace(/[A-Z]/g, l => String.fromCharCode((l.charCodeAt(0) + n - 65) % 26 + 65))
            .replace(/\d/g, d => 9 - d)
            .split('').map( (l,i) => (i % 2 == 0) ? l.toUpperCase() : l.toLowerCase() )
            .reverse().join('');
}

// or

// function playPass(s, n) {
//     abc = "abcdefghijklmnopqrstuvwxyz";
//     let arr = [...s.toLowerCase()];
//     arr.forEach(function(elem, ind) { 
//         // shift each letter
//         if(abc.includes(elem) === true){
//             if (abc.search(elem)+n >= 26) {
//                 arr[ind] = abc[abc.search(elem)+n-26];
//             } else {
//                 arr[ind] = abc[abc.search(elem)+n];
//             }
//             if(ind % 2 === 0){arr[ind] = arr[ind].toUpperCase();} //upcase each letter in even position
//         }
//         //replace each digit
//         if("1234567890".includes(elem) === true){
//             arr[ind] = 9 - elem;
//         }
//     });
//     return arr.reverse().join("");
// }