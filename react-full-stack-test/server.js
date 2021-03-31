// Server

const express = require("express");

const rootRouter = require('./src/server/router');

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(rootRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
