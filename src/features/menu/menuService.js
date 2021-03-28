import axios from "axios";
import { message } from "antd";

const SERVER_URL = `http://localhost:8000/restaurants`;

export async function getFoodsBackend(payload) {
  axios.defaults.headers.common = { Authorization: `Bearer ${payload.token}` };
  try {
    // Send a POST request
    const status = await axios({
      method: "post",
      url: SERVER_URL,
      data: payload,
    });
    if (status.status !== 200) {
      message.info(status.data);
      return;
    } else {
      return status;
    }
  } catch (err) {
    message.info(err.message);
  }
}
