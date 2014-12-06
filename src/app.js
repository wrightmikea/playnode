var Faker = require('Faker');
var randomName = Faker.Name.findName(); // Rowan Nikolaus
var randomEmail = Faker.Internet.email(); // Kassandra.Haley@erich.biz
console.log("HI " + randomName + "(" + randomEmail + ")");
var rn=Math.random();
var rn2=Math.random();
var newrn = rn * rn2;
console.log (newrn);

