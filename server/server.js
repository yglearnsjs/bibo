const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
require("dotenv").config();

const connect = require("./src/db/mongoose");
connect();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const registerRouter = require("./src/controller/registerRouter");
const loginRouter = require("./src/controller/loginRouter");
const bookRouter = require("./src/controller/bookRouter");
const userRouter = require("./src/controller/userRouter");
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/books", bookRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Bookstore Server listening on port ${PORT}`);
});
