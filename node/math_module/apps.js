var my_math = require('./math_module')();
console.log(my_math);
console.log(my_math.add(2, 5));         //should return 7
console.log(my_math.multiply(3, 7));    //should return 21
console.log(my_math.square(7));         //should return 49
console.log(my_math.random(1, 35));     //should return random number between 1 & 35