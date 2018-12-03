var orders = [
  { amount: 250 },
  { amount: 50 },
  { amount: 450 },
  { amount: 400 },
  { amount: 100 }
];

var totalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0);

//map and filter are functions that can be used on an array object
//map filter reject and find are all list transformations - turn your list into something else
//reduce is not.. reduce is the multi-tool of list transformations
//reduce can be used to implement fuctions like map, filter, find etc..
// can be used if you cant find a suitable inbuilt function

//using a for loop
/*var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}*/
console.log(totalAmount);
