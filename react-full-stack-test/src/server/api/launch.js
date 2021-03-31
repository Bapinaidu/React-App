const axiosApi = require("./axiosApi");
const launches = async () => {
  const requestUrl = "https://api.spacexdata.com/v4/launches/past?limit=10";
  const launchesList = await axiosApi(requestUrl);
  const launchDetails = launchesList.map((launch) => {
    return {
      name: launch.name,
      details: launch.details,
      youtubeLink: launch.links.webcast,
      patch: launch.links.patch.small,
    };
  });
  return launchDetails;
};
module.exports = launches;
