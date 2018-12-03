var animals = [
  { name: "Tom", species: "rabbit" },
  { name: "Sam", species: "dog" },
  { name: "Mary", species: "rabbit" },
  { name: "Sprite", species: "dog" },
  { name: "Koodo", species: "horse" },
  { name: "Nono", species: "horse" }
];

//map and filter are functions that can be used on an array object

var names = animals.map(function(animal) {
  return animal.name;
});

var names = animals.map(animal => {
  return animal.name;
});

// var names = [];
// for (var i = 0; i < animals.length; i++) {
//   names.push(animals[i].name);
// }
console.log(names);
