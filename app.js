const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// HTTP request logger middleware for node
const morgan = require("morgan");
const usersRoutes = require("./routes/users");

app.use(morgan("tiny"));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use("/users", usersRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
      message: err.message,
      error: err
    });
  });
}

app.listen(3000, () => {
  console.log("Getting started on port 3000!");
});