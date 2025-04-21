// Solution:
function pickPeaks(arr) {
    const res = { pos: [], peaks: []};
    for (let i = 1; i < arr.length - 1; i++) {
        let next = 1;
        while (arr[i] === arr[i + next]) next++;
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + next]) {
            res.pos.push(i);
            res.peaks.push(arr[i]);
        };
    };
    return res;
}

// or

// function pickPeaks(arr){
//     var result = {pos: [], peaks: []};
//     if(arr.length > 2) {
//       var pos = -1;
//       for(var i=1; i<arr.length;i++){
//         if(arr[i] > arr[i-1]) {
//           pos = i;
//         } else if(arr[i] < arr[i-1] && pos != -1) {
//           result.pos.push(pos);
//           result.peaks.push(arr[pos]);
//           pos = -1;
//         }
//       }
//     }
//     return result;
//   }

// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3])); 
//{pos:[3,7], peaks:[6,3]}

// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));
//{pos:[3,7,10], peaks:[6,3,2]}

// console.log(pickPeaks([2,1,3,1,2,2,2,2,1])); 
//{pos:[2,4], peaks:[3,2]}

// console.log(pickPeaks([2,1,3,1,2,2,2,2])); 
//{pos:[2], peaks:[3]}

// console.log(pickPeaks([2,1,3,2,2,2,2,5,6]));
//{pos:[2], peaks:[3]}

// console.log(pickPeaks([2,1,3,2,2,2,2,1]));
//{pos:[2], peaks:[3]}

// console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3])); 
//{pos:[2,7,14,20], peaks:[5,6,5,5]});

// console.log(pickPeaks([]));
//{pos:[],peaks:[]}

// console.log(pickPeaks([1,1,1,1]));
//{pos:[],peaks:[]}