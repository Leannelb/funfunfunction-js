var animals = [
  { name: "Tom", species: "rabbit" },
  { name: "Sam", species: "dog" },
  { name: "Mary", species: "rabbit" },
  { name: "Sprite", species: "dog" },
  { name: "Koodo", species: "horse" },
  { name: "Nono", species: "horse" }
];

var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);
