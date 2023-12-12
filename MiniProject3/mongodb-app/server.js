const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type-application / json;

let dbConnect = require("./dbConnect");

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Mini Project 3" });
});

let userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

let cardRoutes = require("./routes/cardRoutes");
app.use("/api/card", cardRoutes);

const PORT = process.env.PORT || 8181;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
