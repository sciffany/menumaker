import axios from "axios";
import { message } from "antd";

const SERVER_URL = `http://localhost:8000/foods`;

export async function getFoodsBackend(payload) {
  axios.defaults.headers.common = { Authorization: `Bearer ${payload.token}` };
  try {
    const status = await axios({
      method: "get",
      url: SERVER_URL,
      data: payload,
    });
    if (status.status !== 200) {
      message.info(status.data);
    } else {
      return status;
    }
  } catch (err) {
    message.info(err.message);
  }
}
