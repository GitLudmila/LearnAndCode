// Solution
const rgb = (r, g, b) =>
    [r, g, b].map(val => Math.max(0, Math.min(255, val)).toString(16).padStart(2, `0`)).join(``).toUpperCase();

// or

// function rgb(r, g, b){
//     return [r,g,b].map(function(x) {
//       return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
//     }).join('').toUpperCase();
//   }

//or

//const rgbToHex = (r, g, b) => [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
//const hexToRgb =c=> `rgb(${c.match(/\w\w/g).map(x=>+`0x${x}`)})`;

//or

// function rgb(r, g, b) {
//     const clamp = value => Math.max(0, Math.min(255, value));
//     const toHex = value => clamp(value).toString(16).padStart(2, '0').toUpperCase();
//     return `${toHex(r)}${toHex(g)}${toHex(b)}`;
//   }