const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayout = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(expressLayout);

const port = 3000;
const address = 'localhost';

app.use('/', routes);

const server = app.listen(port, address, () => {
    console.log('> server on');
});