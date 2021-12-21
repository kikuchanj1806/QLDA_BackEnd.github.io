const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Quan_ly_do_an_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connect successfull");

  } catch (error) {
    console.log("connect fail");
  }
}

module.exports = { connect };
