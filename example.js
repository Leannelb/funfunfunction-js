var animals = [
  { name: "Tom", species: "rabbit" },
  { name: "Sam", species: "dog" },
  { name: "Mary", species: "rabbit" },
  { name: "Sprite", species: "dog" },
  { name: "Koodo", species: "horse" },
  { name: "Nono", species: "horse" }
];

//better way to do this is with functional programming, the concept behind JS
var isDog = function(animal) {
  return animal.species === "dog";
};
console.log(dogs);
var dogs = animals.filter(isDog);

// var dogs = [];
// for (var i = 0; i < animals.length; i++) {
//   if (animals[i].species === "dog") dogs.push(animals[i]);
// }
// console.log(dogs);
