const express = require("express");
const mysql = require("../db-config");

const router = express.Router();

router.get("/all", (req, res) => {
  mysql.query("SELECT * FROM user", (err, result) => {
    if (err) {
      res.status(404).send("Error while retrieving users");
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  const userValues = [req.body.firstname, req.body.lastname, req.body.mail];
  console.log(userValues);
  mysql.query(
    "INSERT INTO user (firstname, lastname, mail) VALUES (?,?,?)",
    userValues,
    (err, result) => {
      if (err) {
        res.status(400).send("Error posting an user");
      } else {
        res.status(200).json(result);
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const userId = [req.params.id];
  mysql.query("DELETE FROM user WHERE ID = ?", userId, (err, result) => {
    if (err) {
      res.status(400).send("Error deleting the user");
    } else {
      res.status(200).send("User deleted");
    }
  });
});

module.exports = router;
