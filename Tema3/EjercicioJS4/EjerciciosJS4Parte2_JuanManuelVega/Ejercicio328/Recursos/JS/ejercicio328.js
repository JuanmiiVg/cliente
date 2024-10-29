var array = [[21,2,3,4],[45,32,22,9],[0,66,7,4],[-3,32,11,90],[59,-2, -63,15]];
var arrayUnidimensional = array.reduce(function(a, b) {
    return a.concat(b);
}, []);

console.log(arrayUnidimensional);