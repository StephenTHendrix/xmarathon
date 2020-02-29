const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./config");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.use(cors());

const getRunners = (request, response) => {
  pool.query("SELECT * FROM runners", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addRunner = (request, response) => {
  const { full_name, age } = request.body;

  pool.query(
    "INSERT INTO runners (full_name, age) VALUES ($1, $2)",
    [full_name, age],
    error => {
      {
        if (error) {
          throw error;
        }
        response
          .status(201)
          .json({ status: "success", message: "runner added." });
      }
    }
  );
};

const getBooks = (request, response) => {
  pool.query("SELECT * FROM books", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addBook = (request, response) => {
  const { author, title } = request.body;

  console.log(request.body);

  pool.query(
    "INSERT INTO books (author, title) VALUES ($1, $2)",
    [author, title],
    error => {
      if (error) {
        throw error;
      }
      response.status(201).json({ status: "success", message: "Book added." });
    }
  );
};

app
  .route("/books")
  // GET endpoint
  .get(getBooks)
  // POST endpoint
  .post(addBook);

app
  .route("/runners")
  .get(getRunners)
  .post(addRunner);
// app.route("/:race/:year/marathon").get(getRunners);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on localhost:3000`)
);
