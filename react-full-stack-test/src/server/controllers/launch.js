/* eslint-disable no-unused-expressions *//* eslint-disable import/no-anonymous-default-export */
const getLaunchList = require("../api/launch");
const launch = async () => {
    console.log('I am in launchList controller')   
     const launchList = await getLaunchList();
    return launchList;
};
module.exports = launch;