// Solution

function sumDigPow(a, b) {
    let arr = [];
    for(let i = a; i <= b; i++){
        let n = i .toString() .split("") .map(Number);
        let sum = 0;
        for (let j = 0; j < n.length; j++){
            let num = n[j];
            if (j > 0) {num = Math.pow(n[j], j+1);}
            sum += num;
        }
        if (i === sum){arr.push(i)}
    }
    return arr;
}