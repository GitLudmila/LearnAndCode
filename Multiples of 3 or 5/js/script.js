// Solution
function digitSum(str) {
    return str.split('').reduce(function(s, e) { 
        return s + parseInt(e); 
    }, 0);
}
  
function orderWeight(str) {
    return str.split(' ').sort(function(a, b) {
        return digitSum(a) - digitSum(b) || a.localeCompare(b);
    }).join(' ');
}
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
// console.log("11 11 2000 10003 22 123 1234000 44444444 9999");