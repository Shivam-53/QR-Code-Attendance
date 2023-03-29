//QR CODE WALA CODE H
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser")

const qrcode = require("qrcode");
const exp = require("constants");
const { json } = require("express");
const { debug } = require("console");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//app.set("view engine", "ejs");


app.use(express.static("public"));

app.get("/", (req, res, next) => {
    res.render( __dirname + "/views/index.ejs")
});


app.post("", (req, res) => {
    let FNAME = req.body.FNAME
    let LNAME = req.body.LNAME
    let SID = req.body.SID
    let ROLL = req.body.ROLL
    let BRANCH = req.body.BRANCH
    let pNumber=req.body.PNUMBER
    console.log(FNAME, LNAME, SID, ROLL, BRANCH,pNumber);

    let data = {
        "firstName": FNAME,
        "lastName": LNAME,
        "sid": SID,
        "rollNum": ROLL,
        "branch": BRANCH,
        "phoneNum":pNumber
    }

    let newData = JSON.stringify(data);
    //  qrcode.toDataURL
    //qrcode.toString
    let QR = "";
   let x = 5;
    for (let i = 0; i < x - 1; i++) {
        QR = "QR" + i;
        console.log(QR)
    }
    qrcode.toFile(QR,newData, function (err, code) {
        if (err) return console.log(err);
        console.log(code);
      
    })


    //res.render("scan", { code: newData })

    
    // qrcode.toDataURL(data, (err, src) => {
    //   if (err) res.send(err);
    // res.render("scan", {
    //   qr_code: src,
    //});
    //});
    //  console.log(newData)
    //console.log(data)




})
app.listen(3000, console.log(`Listening on port 3000`));