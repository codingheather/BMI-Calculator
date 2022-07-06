const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000;

//__dirname = get current file's location
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

//using the name attributes (num1 & num2) in html file
app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
})

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = Math.round(weight / (height * height));
  res.send("Your BMI is " + bmi);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
