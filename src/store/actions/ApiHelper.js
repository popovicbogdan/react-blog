import axios from "axios";
const apiUrl = "http://localhost:8000/auth";

class ApiHelper {
  static post(resourceUrl, data, headers) {
    const url = `${apiUrl}/${resourceUrl}`;

    return axios({
      method: "post",
      url,
      data,
      headers: headers
    });
  }
  static get(resourceUrl, data, headers) {
    const url = `${apiUrl}/${resourceUrl}`;

    return axios.get(url, data, {
      headers: headers
    });
  }
}
export default ApiHelper;
