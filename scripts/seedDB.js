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

// 


// addHolding = (userId, holding) {
//     // get the user
//     let user = db.User.find();
//     // add the holding
//     user.holdings.push(holding);
//     // save the user
// }

// addHolding(13092830129, { ticker: "amzn", qty: 10});