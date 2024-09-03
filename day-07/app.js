const app = require("express")();

const { log } = require("console");
app.set("view engine", "ejs");
// app.set("views", "assets")

app.listen(3000);
app.use(express.static("public"));

// logger
app.use((req, _, next) => {
  log("New request made: ");
  log("host : " + req.hostname);
  log("path : " + req.path);
  log("method : " + req.method);
  next();
});

app.use((_, __, next) => {
  log("In next middleware.");
  next();
});

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
