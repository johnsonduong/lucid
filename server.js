const express = require("express");
const blogRouter = require("./routes/blogs");
const app = express();

app.set("view engine", "ejs");

app.use("/blogs", blogRouter);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Test",
      createdOn: Date.now(),
      description: "test description",
    },
  ];

  res.render("index", { blogs: blogs });
});

app.listen(3000);
