const express = require("express");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const errorLogger = require("./src/middlewares/errorLogger");
const auth = require("./src/middlewares/auth");

var app = express();

// register middlewares
app.use(express.json()); // parse req body
app.use(express.urlencoded({ extended: false })); // parse array/object
app.use(cookieParser());
app.use(errorLogger);
app.use(auth);

// register routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

module.exports = app;
