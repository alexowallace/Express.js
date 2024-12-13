const express = require("express");
const path = require("path");
const app = express();
const port = 3000;




//middleware
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  res.send("Get a random log");
  next();
};

app.use(myLogger);




//express router
const birds = require("./birds.js");
app.use("/birds", birds);


// static router//file named static
app.use(express.static(path.join(__dirname, "static")));
app.use(express.static("public"));
app.use('/', require(path.join(__dirname,'routes/blog.js')))


app.route 
app
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send("Add a book");
  })
  .put((req, res) => {
    res.send("Update the book");
  });





// routing method
app.get("/", (req, res) => {
  console.log("get  acheive");
  res.sendFile("Hello World!");
});
app.get("/hello/:name", (req, res) => {
  console.log("get  acheive");
  res.send("Hello World!" + req.params.name);
});
app.post("/", (req, res) => {
  console.log("post acheive");
  res.send("Got a post request");
});

app.all("/", (req, res) => {
  console.log("all acheive");
  res.send("Got a all request");
});

app.put("/user", (req, res) => {
  console.log("put  acheive");
  res.send("Got a PUT request at /user");
});
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.get("/about", (req, res) => {
  res.send("Hello World about");
  console.log("get  acheive");
  res.sendFile(path.join(__dirname, "index.html"));
  res.json({"ashok": 77,
      "as":45
  })
});






app.listen(port, () => {
  console.log(`blog app listening on port ${port}`);
});
