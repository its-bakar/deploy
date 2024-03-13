const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const UserModel = require("./models/users");

app.use(
  cors({
    origin: "https://deploy-two-beta.vercel.app",
    methods: ["GET"],
    credentials: true,
  })
);
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/crud").then(() => {
  console.log("Connected to MongoDB!");
});
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
