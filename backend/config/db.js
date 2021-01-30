const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected ");
  } catch (ex) {
    console.log(ex);
  }
};
