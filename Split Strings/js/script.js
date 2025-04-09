// Solution

function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}

// or

// function solution(str){
//   if (str == "") {return []}
//   let arr = [];
//   for (let i = 0; i < str.length; i+=2) {
//       arr = arr.concat(str.substring(i, i+2));
//   }
//   let l = arr.length-1;
//   if (arr[l].length !== 2){arr[l] = arr[l].concat("_")}
//   return arr;
// }