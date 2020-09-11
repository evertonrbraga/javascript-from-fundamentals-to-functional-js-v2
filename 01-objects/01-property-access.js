var person = {};

person.name = "Mrs. White";
//or
var person = {
  name: "Mrs. White",
};

var who = person.name;

console.log(who);

person.name = "Mr. White";

console.log(who);
console.log(who.story);
