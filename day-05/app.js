const express = require("express");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "assets")

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "lorem ipsum dolor sit", snippet: "lorem ipsum dolor sit ipresm" },
    {
      title: "How does cheat code works",
      snippet: "By changing the value of memory location of data",
    },
    {
      title: "cheat code for master ball in fire red",
      snippet: "800100138 0044",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Create new blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "<b> Not found </b>" });
});
