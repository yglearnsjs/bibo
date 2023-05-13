const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookType: { type: String },
    bookCategory: { type: String },
    bookImage: { type: String },
    BookName: { type: String },
    BookPrice: { type: String },
  },
  {
    collection: "Books",
  }
);
const bookModel = mongoose.model("bookModel", bookSchema);
module.exports = bookModel;
