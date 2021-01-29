const dotenv = require("dotenv");
const express = require("express");
const { connectDB } = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

const courses = require("./routes/course");

app.get("/", (req, res) => {
  res.send("courseware");
});
app.use("/courses", courses);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
