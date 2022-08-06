const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const postRouter = require("./routes/posts");

app.use("/posts", postRouter);

// app.get("/api", (req, res) => {
//   const posts = [
//     {
//       title: "Test1",
//       date: new Date(),
//       body: "test description",
//     },
//     {
//       title: "Test2",
//       date: new Date(),
//       body: "test description",
//     },
//     {
//       title: "Test3",
//       date: new Date(),
//       body: "test description",
//     },
//   ];

//   res.json({ posts: posts });
// });

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
