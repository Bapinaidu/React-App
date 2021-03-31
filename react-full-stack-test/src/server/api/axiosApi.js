const axios = require("axios");
const axiosApi = async (requestUrl) => { 
    const res = await axios.get(requestUrl, 
        { headers: { 'Content-Type': 'application/json' }, }); 
        console.log(res)      
        return res.data; 
    }
module.exports = axiosApi;