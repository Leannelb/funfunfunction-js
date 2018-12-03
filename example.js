//currying in js
let dragon = name => size => element =>
  name + " is a " + size + " dragon that breathes " + element + "!";

// outputs
//fluffykins is a tiny dragon that breathes lighning!

console.log(dragon("fluffikins")("tiny")("lightning"));
