const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/getadress", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});

app.post("/postadress", function (req, res, next) {
  console.log(req.body);
  res.send({ msg: "done" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
