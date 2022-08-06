const express = require("express");
const postRouter = require("./routes/posts");
const app = express();

// app.set("view engine", "ejs");

app.use("/posts", postRouter);

app.get("/api", (req, res) => {
  res.json({ dreams: ["dream1", "dream2", "dream3"] });
});

// app.get("/", (req, res) => {
//   const posts = [
//     {
//       title: "Test",
//       createdOn: Date.now(),
//       description: "test description",
//     },
//   ];

//   res.render("index", { posts: posts });
// });

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
