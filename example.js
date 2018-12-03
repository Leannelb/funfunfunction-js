var animals = [
  { name: "Tom", species: "rabbit" },
  { name: "Sam", species: "dog" },
  { name: "Mary", species: "rabbit" },
  { name: "Sprite", species: "dog" },
  { name: "Koodo", species: "horse" },
  { name: "Nono", species: "horse" }
];

var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === "dog") dogs.push(animals[i]);
}
console.log(dogs);
