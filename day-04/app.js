const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  //   res.send("this is name page");
  res.sendFile("./assets/index.html", { root: __dirname });
});

app.get("/name", (req, res) => {
  //   res.send("<h2>Hello my name is sunil </h2>");
  res.sendFile("./assets/name.html", { root: __dirname });
});

// redirect
app.get("/sunil", (req, res) => {
  app.redirect("/name");
});

app.use((req, res) => {
  res.status(404).sendFile("./assets/notfound.html", { root: __dirname });
});
