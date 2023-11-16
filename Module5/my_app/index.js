// import all calculator routes (up top)
const express = require("express");
const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require('./routes/calculatorRoutes');
const userRoutes = require('./routes/userRoutes');
const friendRoutes = require('./routes/friendRoutes');


const app = express();
const port = 3000;

app.use(express.json());

// map the calculator routes to our app
app.use("/", express.static("public"));
app.use("/mytest", testRoutes); // prefix
app.use('/calculator', calculatorRoutes)
app.use('/users', userRoutes);
app.use('/friends', friendRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
