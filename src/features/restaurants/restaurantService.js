import axios from "axios";
import { message } from "antd";

const SERVER_URL = `http://localhost:8000/restaurants`;

export async function addRestaurantBackend(payload) {
  axios.defaults.headers.common = { Authorization: `Bearer ${payload.token}` };
  try {
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

export async function getRestaurantsBackend(token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  try {
    const status = await axios({
      method: "get",
      url: SERVER_URL,
    });
    return status.data;
  } catch (err) {
    message.info(err.message);
  }
}
