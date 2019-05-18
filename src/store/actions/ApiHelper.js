import axios from "axios";
const apiUrl = "http://localhost:8000/api";

const initialHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json"
};

const getInitialHeaders = () => Object.assign({}, initialHeaders);

class ApiHelper {
  static post(resourceUrl, data) {
    const url = `${apiUrl}/${resourceUrl}`;

    return axios({
      method: "post",
      url,
      data,
      headers: getInitialHeaders()
    });
  }
  static get(resourceUrl) {
    const url = `${apiUrl}/${resourceUrl}`;

    return axios.get(url, {
      headers: getInitialHeaders()
    });
  }
}
export default ApiHelper;
