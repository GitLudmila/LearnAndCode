// Solution

function moveZeros(arr) {
  return arr.sort((a, b) => b === 0 ? -1 : 0);
}

// or

// function moveZeros(arr) {
//   newArr = arr.filter(e => e !== 0);
//   while (newArr.length < arr.length) {newArr.push(0);};
//   return newArr;
// }