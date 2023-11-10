const mongoose = require("mongoose");
const username = "gaurav122kum";
const password = "Ankurgk123";
const url = `mongodb+srv://gaurav122kum:${password}@db.zccuiox.mongodb.net/?retryWrites=true&w=majority?directConnection=true`;
mongoose.connect(url);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo db connected successfully");
});

connection.on("error", (err) => {
  console.log("Mongo db connection error: ", err);
});

module.exports = mongoose;
