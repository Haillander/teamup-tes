require("dotenv").config();
const path = require("path");
const cors = require("cors"); // import cors package
const express = require("express");

const db = require("./config/connection");
const routes = require("./routes");
const PORT = process.env.PORT || 4040;
const app = express();
app.use(cors()); // enable CORS
app.use(express.static(path.join(__dirname, "public ")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public ", "index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
