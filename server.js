/*const express = require('express');

const allRoutes = require('./controllers');
const db = require("./config/connection")
const session = require("express-session");

//const routes = require('./routes');
//const db = require("./config/connection")


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

*/
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const cloudinary = require("cloudinary").v2;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);




const app = express();
const PORT = process.env.PORT || 3001;


// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


cloudinary.config({
  cloud_name: "dbusqnlkm",
  api_key: "542873976966233",
  api_secret: "6bQ42lsRLv16RbqEkF0j8CGqRJ8",
});

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
