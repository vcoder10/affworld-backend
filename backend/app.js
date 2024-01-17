const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
//const bodyParser = require("body-parser");

//const errorMiddleware = require("./middleware/error");

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config();
// }

// Use the cors middleware
app.use(
  cors({
    origin: "http://localhost:3000", // replace with the actual origin of your React app
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"], // add Content-Type to the allowed headers
  })
);

app.use(express.json());
app.use(cookieParser());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(fileUpload());

// Route Imports

const user = require("./routes/userRoute");
const msg = require("./routes/messageRoute");

app.use("/api/v1", user);
app.use("/api/v1", msg);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// Middleware for Errors
//app.use(errorMiddleware);

module.exports = app;
