const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/my-financial-friend"
);

const userSeed = [
    {
        username: "admin",
        password: "password",
        holdings: []
    },
    {
        username: "Jawn",
        password: "Safety",
        holdings: []
    }
];

const holdingSeed = [
    {
        ticker: "aapl",
        quantity: 10
    },
    {
        ticker: "ibm",
        quantity: 15
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Holding
    .remove({})
    .then(() => db.Holding.collection.insertMany(holdingSeed))
    .then(data => {
            console.log(data.result.n + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });




// const addHolding = (user, holding) => {
//     // get the user
//     // add the holding
//     db.User.update({username: "Jawn"}, {$push: {holdings:[{ticker:aapl}, {quantity: 10}]}})

//     // save the user
// };

// addHolding(,);