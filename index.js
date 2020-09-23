const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3001;

const db = require("./models");

const { User } = require("./models");

app.use(express.json());
app.use(cors());

app.post("/signin", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const googleId = req.body.googleId;

  User.create({
    name: name,
    email: email,
    googleId: googleId,
  }).catch((err) => {
    console.log(err);
  });

  res.send("inserted into database");
});

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}...`);
  });
});
