import axios from "axios";

const govAPI = axios.create({
  baseURL: "https://api.data.gov.sg/v1/transport",
  timeout: 8000,
});

export default govAPI;
