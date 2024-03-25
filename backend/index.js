const express = require("express");

const app = express();
const cors = require("cors");
const authController = require("./controller/authController");
const userController = require("./controller/UserController");
const postController = require("./controller/PostController");
const uploadFile = require("./controller/FileController");
const mongoose = require("mongoose");
const applicationController = require("./controller/applicationController");
// const json = require("json()");

app.use(express.json());
app.use(cors());
app.use("/auth", authController);
app.use("/user", userController);
app.use("/job", postController);
app.use("/upload", uploadFile);
app.use("/application", applicationController);

app.use(express.static("public"));
app.use("/cv", express.static("cv"));

mongoose.connect(
  "mongodb+srv://siddharthasunuwar:H%40tepops00@cluster0.fjdontg.mongodb.net/Freelancing",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.listen(3333, () => {
  console.log("Server has started");
});
