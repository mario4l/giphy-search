import axios from "axios";

const KEY = "31rHPnm7AOgcRpF1la53xA9kGebDJwX3";

// pre configuration of axios for Giphy Search
export default axios.create({
  baseURL: "http://api.giphy.com",
  params: {
    api_key: KEY,
    limit: 30
  }
});
