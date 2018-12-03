var orders = [
  { amount: 250 },
  { amount: 50 },
  { amount: 450 },
  { amount: 400 },
  { amount: 100 }
];

// var totalAmount = orders.reduce(function(sum, order) {
//   return sum + order.amount;
// }, 0);

// with arraow functions this becomes:
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
/*
PRINTS:
Leannes-MacBook-Pro-2:funfunfunction-js leannelacey-byrne$ node example.js
The sum is: 0 { amount: 250 }
The sum is: 250 { amount: 50 }
The sum is: 300 { amount: 450 }
The sum is: 750 { amount: 400 }
The sum is: 1150 { amount: 100 }
1250*/

//using a for loop
/*var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}*/
console.log(totalAmount);
