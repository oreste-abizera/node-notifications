const express = require("express");
const notifier = require("node-notifier");
const path = require("path");

const app = express();

app.get("/", (req, res, next) => {
  notifier.notify({
    title: "Greetings",
    message: "Hello!",
    icon: path.join(__dirname, "/images/icon.jpg"),
  });
  res.send({ message: "Notification sent" });
});

const PORT = 7000;
app.listen(PORT, () =>
  console.log(`Node js server is running on port ${PORT}`)
);
