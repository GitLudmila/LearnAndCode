// Solution

function findEmirp(n){
  let list = [], bigNum = 0, sum_of_emirps_below_n = 0;
    
  for(let i = 13; i <= n; i++){
      let rev = Number(i.toString().split("").reverse().join(""));
      if (i !== rev) {
          if (isPrime(i) === true && isPrime(rev) === true) {
              list.push(i);
              sum_of_emirps_below_n+=i;
          }
      }
  }
  if(list.length !== 0) {bigNum = list[list.length-1];}
  return [list.length, bigNum, sum_of_emirps_below_n];
}

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
};