// Solution

function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

// or

// function spinWords(string){
//     let arr = string.split(" ");
//     for (let i = 0; i < arr.length; i++) {if (arr[i].length >= 5) {arr[i] = arr[i].split("").reverse().join("")}}
//     return arr.join(" ").trim();
// }