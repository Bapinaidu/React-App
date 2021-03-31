const express = require("express");
const launchRouter = require("./launch");
const rocketRouter = require("./rocket");


const v1Router = new express.Router();

v1Router.use("/launches", launchRouter);
v1Router.use("/rockets", rocketRouter);

module.exports = v1Router;
