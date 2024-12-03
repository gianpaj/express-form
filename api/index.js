const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.sendFile(__dirname + '/public/index.html');
  //
  return "Hello World!";
});
app.post("/data", (req, res) => {
  const data = req.body;
  console.log(data);
  return {
    ok: true,
  };
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
