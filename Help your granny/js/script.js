// Solution

function tour(friends, fTowns, distTable) {
  var sum=0.0;
  var bef=0.0;
  fTowns.forEach(function (town) {
    if(friends.indexOf(town[0])>=0) {
      var dist=distTable[distTable.indexOf(town[1])+1];
      if(sum==0) sum=dist;
      else sum+=Math.sqrt(Math.pow(dist,2)-Math.pow(bef,2));
      bef=dist;
    }
  });
  return Math.floor(sum+bef);
}