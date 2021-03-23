import axios from "axios";

const SERVER_URL = `http://localhost:8000/foods`;

export async function addFoodBackend(payload) {
  // Send a POST request
  const status = await axios({
    method: "post",
    url: SERVER_URL,
    data: payload,
  });

  if (typeof status.data === "string") {
    return status.data;
  } else {
    return "Success";
  }
}
