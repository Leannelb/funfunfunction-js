//currying in js
let dragon = name => size => element =>
  name + " is a " + size + " dragon that breathes " + element + "!";

// outputs
//fluffykins is a tiny dragon that breathes lighning!
let fluffykinsDragon = dragon("fluffikins");

console.log(fluffykinsDragon("tiny")("lightning"));
//your function can go through the app and
