const express = require("express");
const v1Router = require("./router");

const rootRouter = new express.Router();
rootRouter.use("/v1/api", v1Router);

module.exports = rootRouter;
