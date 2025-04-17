// Solution
function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}

//or

//function findUniq(arr) {
//     const counts = {};
//     arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
//     for (var key in counts) {if(counts[key] == 1) {return Number(key)}}
//}