const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect("process.env.DB", () => connectionParams);
    console.log("Connected to Database Successfully");
  } catch (error) {
    console.error("Couldn't connect to the Database!");
  }
};
