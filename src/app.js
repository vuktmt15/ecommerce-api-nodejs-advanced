const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

//Init Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//Init routes
app.get("/", (req, res) => {
  return res.status(200).json({
    code: 200,
    data: "Hello, world".repeat(20000),
  });
});

module.exports = app;
