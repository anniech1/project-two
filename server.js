const express = require('express');

const allRoutes = require('./controllers');
const db = require("./config/connection")
const session = require("express-session");

const routes = require('./routes');
const db = require("./config/connection")


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// session stuff!
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2,
  },
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.use("/", allRoutes);


db.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})