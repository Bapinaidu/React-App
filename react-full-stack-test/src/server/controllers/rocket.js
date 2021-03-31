const getRocketsList = require("../api/rocket");
const rocket = async () => {
    console.log('I am in rocketList controller')   
     const rocketList = await getRocketsList();
    return rocketList;
};
module.exports = rocket;