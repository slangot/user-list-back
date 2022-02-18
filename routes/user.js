const express = require("express");
const mysql = require("../db-config");

const router = express.Router();

router.get("/all", (req, res) => {
  mysql.query("SELECT * FROM user", (err, result) => {
    if (err) {
      res.status(500).send("Error while retrieving users");
    } else {
      res.status(200).json(result);
    }
  });
});

router.delete("/:id", (req, res) => {
  const userId = [req.params.id];
  mysql.query("DELETE FROM user WHERE ID = ?", userId, (err, result) => {
    if (err) {
      res.status(500).send("Error while deleting the user");
    } else {
      res.status(200).send("User deleted");
    }
  });
});

module.exports = router;
