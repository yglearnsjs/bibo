const express = require("express");
const Book = require("../model/bookSchema");
const router = express.Router();
const multer = require("multer");
// const PORT = 4000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
// post request for register the user
router.post("/", upload.single("file"), async (req, res, next) => {
  // console.log(req.file)
  req.body.bookImage = req.file.filename;
  try {
    console.log(req.body);
    const selectedBook = Book.create(req.body);
    // console.log(selectedbook)
    if (selectedBook) {
      res.json({
        message: "Book Added Sucessfully!",
        detail: selectedBook,
      });
    }
  } catch (error) {
    res.json({
      errorMsg: "Something Went Wrong",
      errDetail: error,
    });
  }
});

// view users
router.get("/", async (req, res) => {
  try {
    const BookList = await Book.find();
    if (bookList) {
      res.json({
        message: "fetch successful",
        bookList: bookList,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await Book.deleteOne({ _id: req.params.id });
    if (data) {
      res.json({
        message: "Deleted book",
        detail: data,
      });
    }
  } catch (error) {
    res.json({
      errorMsg: "something went wrong",
      errDetail: error,
    });
  }
});

module.exports = router;
