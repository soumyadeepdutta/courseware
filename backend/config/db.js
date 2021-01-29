const mongoose = require("mongoose");
exports.connectDB = async () =>
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((ex) => {
      console.log(`DB connection failed: ${ex}`);
      process.exit(1);
    });
