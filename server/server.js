const path = require("path");
const express = require("express");
require('dotenv').config();
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// middleware to render the page elements - css, images, etc.
app.use(express.static(path.join(__dirname, './public')));

// Set EJS as our templating language
app.set('view engine', 'ejs'); 
app.set("views", "./views");     


app.use(routes);

app.listen(PORT, () => {
  console.log(
    `\n------------------------\n\nServer is running:   http://localhost:${PORT}      👀\n` +
      `\n------------------------\n`
  );
});
