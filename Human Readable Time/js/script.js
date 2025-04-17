// Solution
function humanReadable(seconds) {
    return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
      v = Math.floor(v).toString();
      return v.length == 1 ? '0' + v : v;
    }).join(':');
  }
// or
function humanReadable (sec) {
    let time = [0,0,0];
    
    if(sec / 3600 >= 1) {time[0] += Math.trunc(sec/3600); sec = Math.trunc(sec%3600)}
    if(sec / 60 >= 1) {time[1] += Math.trunc(sec/60); sec = Math.trunc(sec%60)}
    if(sec >= 1 && sec < 60) {time[2] += sec}
    
    for(let i = 0; i <= 3; i++) {
        if(time[i] < 10) {time[i] = "0"+time[i]}
    }
    return time.join(":");
}