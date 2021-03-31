const axiosApi = require("./axiosApi");
const rockets = async () => {
  const requestUrl = "https://api.spacexdata.com/v4/rockets?limit=10";
  const rocketsList = await axiosApi(requestUrl);
  const rocketsDetails = rocketsList.map((rocket) => {
    return {
      name: rocket.name,
      description: rocket.description,
      cost: rocket.cost_per_launch
    };
  });
  return rocketsDetails;
};
module.exports = rockets;
