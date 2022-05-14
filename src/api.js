import axios from "axios";

export default axios.create({
  baseURL: "https://revzork.revunit.com/api",
  headers: {
    "x-api-key": process.env.VUE_APP_API_KEY,
    "Content-type": "application/json",
  },
});
