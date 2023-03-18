const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"), // <-- fix typo here
  booksRouter = require("./routes/books");
require("dotenv").config();
const app = express(),
  port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/book",booksRouter);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true })      

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});