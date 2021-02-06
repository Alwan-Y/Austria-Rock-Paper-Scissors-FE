import axios from "axios";

const baseUrl = process.env.REACT_APP_ROOT_URL;

class api {
  static joinRoom = async (id, username) => {
    try {
      const res = await axios.patch(`${baseUrl}/rooms/${id}`, {
        username,
      });

      return await res;
    } catch (error) {
      return error;
    }
  };

  static createRoom = async (username) => {
    try {
      const res = await axios.post(`${baseUrl}/rooms`, {
        username,
      });

      return await res;
    } catch (error) {
      return error;
    }
  };
}

export default api;