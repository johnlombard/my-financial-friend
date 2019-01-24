const express = require("express");
const session = require("express-session");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Requiring passport as we've configured it
var passport = require("./config/passport");

//  middleware for parsing body on post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connecting to the DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-financial-friend");
const db = require("./models");

// Passport 
app.use(session({ secret: "finfriend", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//Login post route
// TODO: REMOVE OLD ROUTE
app.post("/login", passport.authenticate("local"), (req, res) => {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json({
    loggedIn: true,
    message: "THIS WORKED!",
    username: req.user.username
  });
});

// Route for logging user out
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});



// Route to get user information
app.get("/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({ loggedIn: false });
  }
  else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      loggedIn: true
    });
  }
});

// Add routes, both API and view
app.use(routes);

// Getting Users
app.get("/users", function (req, res) {
  console.log("All holdings route was hit!");
  // Getting all holdings and send them back in a json blob
  db.User
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  // res.json({routeHit: true})
})

// Getting Users
app.get("/users/:id", function (req, res) {
  console.log("All holdings route was hit!");
  // Getting all holdings and send them back in a json blob
  db.User
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  // res.json({routeHit: true})
})

app.get("/holdings", function (req, res) {
  console.log("All holdings route was hit!");
  // Getting all holdings and send them back in a json blob
  db.Holding
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  // res.json({routeHit: true})
})




// ******************************
app.post("/holdings", function (req, res) {
  console.log("Holding post route was hit!");
  // Getting all holdings and send them back in a json blob
  db.Holding
    .create(req.params)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  // res.json({routeHit: true})
})

app.get("/holdings/:id", function (req, res) {
  console.log("Holding id route was hit!");
  // Getting all holdings and send them back in a json blob
  db.Holding
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  // res.json({routeHit: true})
});




// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// };


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
