const express = require("express");
const handler = require("../handler");
const rocket = require("../../controllers/rocket");

const rocketRouter = new express.Router();
rocketRouter.get("/getRockets", handler(rocket));

module.exports = rocketRouter;
