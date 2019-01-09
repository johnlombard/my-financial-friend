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
   
  },
  {
    username: "Jawn",
    password: "Safety",
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
