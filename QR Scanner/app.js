let { attendence } = require("./google_sheet_upload");
let express = require("express");
let path = require("path");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/decodedText", (req, res) => {
  console.log(req.body.decodedText);
  const { firstName, lastName, sid, rollNum, branch, phoneNum } =
    req.body.decodedText;
  attendence(firstName, lastName, sid, rollNum, branch, phoneNum);
  res.send({ status: "Got a POST request" });
});


app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});
