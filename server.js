const express = require("express");
const knex = require("./knex")

const app = express();

app.use(express.json());

app.get("/api/scrum", async (_, res) => {
  const data = await knex.select().table("scrum");
  res.status(200);
  res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running at " + port);
});
