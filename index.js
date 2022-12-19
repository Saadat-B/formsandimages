const express = require("express");

const app = express();

app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mygetform", (req, res) => {
  res.render("getform");
});
app.get("/mypostform", (req, res) => {
  res.render("postform");
});

app.listen(4000, () => console.log("Server is running at port 4000..."));
