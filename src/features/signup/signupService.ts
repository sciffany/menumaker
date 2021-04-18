import { message } from "antd";
import axios from "axios";

const SERVER_URL = `http://localhost:8000/users/signup`;

type Status = String;
type SignupPayload = {
  email: String;
  password: String;
  confirmPassword: String;
};

export async function signupBackend(payload: SignupPayload): Promise<Status | undefined> {
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
    message.info("Email address or password is incorrect");
  }
}
