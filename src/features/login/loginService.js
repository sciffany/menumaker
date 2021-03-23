import { message } from "antd";
import axios from "axios";

const SERVER_URL = `http://localhost:8000/users/login`;

export async function loginBackend(payload) {
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
      return status.data.token;
    }
  } catch (err) {
    console.log(err);
  }
}
