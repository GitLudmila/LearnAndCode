// Solution

function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

// or

// function createPhoneNumber(numbers){
//     let arr = numbers.slice(0, 3);
//     arr.unshift("(");
//     arr.push(") ");
//     arr.push(...numbers.slice(3, 6));
//     arr.push("-");
//     arr.push(...numbers.slice(6));
    
//     return arr.join("");
//   }