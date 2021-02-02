const express = require("express");
const knex = require("./knex");

const app = express();

app.use(express.static("public"));

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
    res.status(200).send(added[0]);
  } catch (error) {
    res.sendStatus(400);
  }
});

app.patch("/api/scrum/:id", async (req, res) => {
  const empId = parseInt(req.params.id);
  // const updateObj = {};
  try {
    // for (const key in req.body) {
    //   updateObj[key] = req.body[key];
    // }
    await knex('scrum').where({emp_id: empId}).update(req.body);
    const updated = await knex('scrum').select().where({emp_id: empId});
    res.send(updated[0]);
    return;
  } catch (error) {
    res.sendStatus(400);
  }
});

app.delete("/api/scrum/:id", async (req, res) => {
  const empId = parseInt(req.params.id);
  try {
    const deleted = await knex('scrum').select().where({emp_id: empId});
    await knex('scrum').where({emp_id: empId}).del();
    res.status(200).send(deleted[0]);
  } catch (error) {
    res.sendStatus(400);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running at " + port);
});
