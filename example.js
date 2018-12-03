//currying in js
let dragon = (name, size, element) =>
  name + " is a " + size + " dragon that breathes " + element + "!";

console.log(dragon("fluffykins", "tiny", "lighning"));

// outputs
//fluffykins is a tiny dragon that breathes lighning!
