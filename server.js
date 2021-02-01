const express = require("express");
const knex = require("./knex")

const app = express();

app.use(express.json());

const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log("Server running at " + port);
});
