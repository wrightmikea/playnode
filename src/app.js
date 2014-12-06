
var express = require('express');
var Faker = require('Faker');
var userSave = require('save')('user');
var randomName = Faker.Name.findName(); // Rowan Nikolaus
var randomEmail = Faker.Internet.email(); // Kassandra.Haley@erich.biz
console.log("HI " + randomName + "(" + randomEmail + ")");
var rn=Math.random();
console.log (rn);
userSave.create({name: Faker.Name.findName()});
userSave.create({name: Faker.Name.findName()});
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
router.get('/',function(req,res) {
    //res.send('hi');
    userSave.find({}, function(error, users) {
        res.send(users);
    });
});
app.use('/api', router);
app.listen(port);
console.log('listening on ' + port);


