const dotenv = require("dotenv");
const express = require("express");
const { connectDB } = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

const courses = require("./routes/course");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("courseware");
});
app.use("/courses", courses);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
