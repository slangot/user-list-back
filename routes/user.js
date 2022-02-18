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

module.exports = router;
