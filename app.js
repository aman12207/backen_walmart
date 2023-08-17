const express = require("express");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error.js");
const cors = require("cors");

const app = express();

app.use(express.json()); // This includes bodyParser.json()

app.use(cors());            // to allow react app to make call

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
    exposedHeaders: ["Content-Type"],
  })
);

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });
// Load environment variables
dotenv.config({ path: "config/config.env" });

// Importing routes
const productRoute = require("./routes/productRoute.js");
const billRoute = require("./routes/billRoute.js");

// Using routes
app.use("/api/v1", productRoute);
app.use("/api/v1", billRoute);

// Error middleware
app.use(errorMiddleware);

module.exports = app;
