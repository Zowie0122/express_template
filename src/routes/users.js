var express = require("express");
var router = express.Router();

router.get("/api/users", function (req, res, next) {
  // retrive all users from database
  res.status(200).send("respond with a resource");
});

router.get("/api/users/:id", function (req, res, next) {
  // retrive user from database
  res.status(200).send(`you are requesting ${req.params.id}`);
});

router.post("/api/users", function (req, res, next) {
  // add user to database
  res.status(200).send(`you are requesting ${req.params.id}`);
});

module.exports = router;
