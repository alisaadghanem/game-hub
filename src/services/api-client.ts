import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ffdb9e8411c74064bbf74e2273e59ea2",
  },
});
