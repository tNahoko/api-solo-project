const express = require("express");
const knex = require("./knex")

const app = express();

app.use(express.json());

app.get("/api/scrum", async (req, res) => {
  const data = await knex.select().table("scrum");
  res.status(200);
  res.send(data);
});

app.post("/api/scrum", async (req, res) => {
  try {
    const newMember = {
    name : req.body.name,
    role : req.body.role,
    level : req.body.level
  };
    await knex('scrum').insert(newMember);
    const added = await knex('scrum').select().where('name', req.body.name);
    res.status(200).send(added);
  } catch (error) {
    res.sendStatus(400);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running at " + port);
});
