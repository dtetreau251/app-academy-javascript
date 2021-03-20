//let callback = function() {
//  console.log("It has been 5 seconds!");
//};

//let timmeToWait = 5000;

//global.setTimeout(callback, timeToWait);

//more likely to see:
//global.setTimeout(function() {
//  console.log("It has been 5 seconds!");
//}, 5000);

global.setTimeout(() => console.log("It has been 5 seconds!"), 5000);
//^^ preferred syntax