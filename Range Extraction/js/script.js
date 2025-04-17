// Solution

solution = (list)=>list.reduce((acc,curr,i) => {
    if (i==0) return curr.toString();
    if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
    if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
    return acc+","+curr;
});

// or

// const solution = list =>
//   list.map((val, idx) => list[idx - 1] === val - 1 && list[++idx] === val + 1 ? `~` : val).join(`,`).replace(/,?(~,)+/g, `-`);

// or

// const solution = arr => {
//     let s = null;

//     return arr.sort((a, b) => a - b).reduce((p, c, i, arr) => {
//         if (!s) s = c;
//         if (c + 1 !== arr[i + 1]) {
//             s === c ? p.push(s) : c - 1 === s ? p.push(s, c) : p.push(`${s}-${c}`);
//             s = null;
//         }
//         return p
//     }, []).join(",")
// }