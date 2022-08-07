const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const postRouter = require("./routes/posts");
const authRouter = require("./routes/auth");

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

app.use("/posts", postRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
