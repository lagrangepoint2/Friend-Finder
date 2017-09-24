var arr1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]; 
var arr2 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];

var totalDifference = 0;

for (var i = 0; i < arr1.length; i++) {
totalDifference += Math.abs(arr1[i] - arr2[i]);
}


console.log(totalDifference); // print 5
