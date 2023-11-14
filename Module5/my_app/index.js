// import all calculator routes (up top)
const express = require("express");
const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require('./routes/calculatorRoutes');
const userRoutes = require('./routes/userRouts');

const app = express();
const port = 3000;

// map the calculator routes to our app
app.use("/", express.static("public"));
app.use("/mytest", testRoutes); // prefix
app.use('/calculator', calculatorRoutes)
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
