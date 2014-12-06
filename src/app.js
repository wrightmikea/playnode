var express = require('express');
var Faker = require('Faker');
var randomName = Faker.Name.findName(); // Rowan Nikolaus
var randomEmail = Faker.Internet.email(); // Kassandra.Haley@erich.biz
console.log("HI " + randomName + "(" + randomEmail + ")");
var rn=Math.random();
var rn2=Math.random();
var newrn = rn * rn2;
console.log (newrn);
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
router.get('/',function(req,res) {
    res.send('hi');
});
app.use('/api', router);
app.listen(port);
console.log('listening on ' + port);


