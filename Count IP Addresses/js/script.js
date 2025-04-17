// Solution
function ipsBetween(start, end){
  //adresses to array , reversed to make the i according to the exposant
const arrFromStartAddress = start.split('.').map(octet => Number(octet)).reverse();
const arrFromEndAddress = end.split('.').map(octet => Number(octet)).reverse();
  //adresses numerical
     let endOctet = 0;
    let startOctet = 0;
  for (let i = 0; i < 4; i++) {
    endOctet += arrFromEndAddress[i] * 256 ** i;
    startOctet += arrFromStartAddress[i] * 256 ** i;
}
  
  return endOctet-startOctet
}

//or

// function ipsBetween(start, end){
//   const num = ip => ip.split('.')
//                       .map(x => parseInt(x))
//                       .reduce((acc, e) => acc * 256 + e);  
  
//   return num(end) - num(start);
// }