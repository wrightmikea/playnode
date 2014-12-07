
var express = require('express');
var Faker = require('Faker');
var mongoose = require('mongoose');
var userSave = require('save')('user');
var randomName = Faker.Name.findName(); // Rowan Nikolaus
var randomEmail = Faker.Internet.email(); // Kassandra.Haley@erich.biz
console.log("HI " + randomName + "(" + randomEmail + ")");
var rn=Math.random();
console.log (rn);
var names = [ Faker.Name.findName(), Faker.Name.findName() ];
userSave.create({name: names[0]});
userSave.create({name: names[1]});

mongoose.connect('mongodb://localhost/playnode');
var Cat = mongoose.model('Cat', { name: String });
var kittyErr = function (err) {
    if (err) {
        console.log("kittyErr(" + err + ')');
    }
};

var kitty = new Cat({ name: names[0] });
kitty.save(kittyErr);

kitty = new Cat({ name: names[1] });
kitty.save(kittyErr);

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
