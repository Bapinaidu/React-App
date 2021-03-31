const express = require("express");
const handler = require("../handler");
const launch = require("../../controllers/launch");

const launchRouter = new express.Router();
launchRouter.get("/getLaunches", handler(launch));

module.exports = launchRouter;
