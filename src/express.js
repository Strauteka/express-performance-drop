import express from "express";
const app = express();
const port = 8080;

app.get("/temp/test", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log("start express http");
