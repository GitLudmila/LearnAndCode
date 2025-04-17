// Solution
function orderWeight(strng) {
  const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
   function comp(a,b){
     let sumA = sum(a);
     let sumB = sum(b);
     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    };
  return strng.split(' ').sort(comp).join(' ');
 }

//or

//  function digitSum(str) {
//      return str.split('').reduce(function(s, e) { 
//        return s + parseInt(e); 
//      }, 0);
//  }
   
//  function orderWeight(str) {
//        return str.split(' ').sort(function(a, b) {
//          return digitSum(a) - digitSum(b) || a.localeCompare(b);
//        }).join(' ');
//  }

// or

// function orderWeight(s) {
//   return s.split(' ').sort((a,b) => sum(a) - sum(b) || a.localeCompare(b)).join(' ');
// }
// function sum(s) { return s.split('').reduce((s,v) => s + +v, 0); }