const express = require("express");
const notifier = require("node-notifier");

const app = express();

const PORT = 7000;
app.listen(PORT, () =>
  console.log(`Node js server is running on port ${PORT}`)
);
