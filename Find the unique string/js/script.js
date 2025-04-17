// Solution
function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3)
    
    if (!similar(a,b) && !similar(a,c)) return a
    for (d of arr) if (!similar(a,d)) return d
  }
  
  function similar (x, y) {
    x = new Set(x.toLowerCase())
    y = new Set(y.toLowerCase())
  
    if (x.size !== y.size) return false
    for (z of x) if (!y.has(z)) return false
  
    return true
}

//or

// const unique = (x, i, ar) => ar.indexOf(x) === ar.lastIndexOf(x);
// const getUniques = x => [...new Set([...x.toLowerCase()].sort())].join('');
// const findUniq = arr => arr[arr.map(getUniques).findIndex(unique)];

//or

// function strHash(str) {
//     return Array.from(
//       new Set(
//         str
//           .toLowerCase()
//           .split('')
//           .sort(),
//       ),
//     ).join('');
// }
  
//   function findUniq(arr) {
//     const hash = arr.reduce((acc, str) => {
//       var hash = strHash(str);
//       acc[hash] = acc[hash] || {
//         counter: 0,
//       };
//       acc[hash].counter++;
//       acc[hash].value = str;
//       return acc;
//     }, {});
//     return hash[Object.keys(hash).find(key => hash[key].counter === 1)].value;
// }