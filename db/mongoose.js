const mongoose = require("mongoose");

// DB Config
const db = "mongodb://127.0.0.1:27017/arsip";

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));