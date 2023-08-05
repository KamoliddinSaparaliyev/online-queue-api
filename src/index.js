const express = require("express");
const db = require("./db");
const config = require("./shared/config");
// const handleError = require("./shared/errors/handle");


const app = express();

app.use(express.json());


// app.use(handleError);

db().then(() => {
  app.listen(config.port, () => {
    console.log(`Server ${config.port}-portda ishlayapti.`);
  });
});

module.exports = app;
