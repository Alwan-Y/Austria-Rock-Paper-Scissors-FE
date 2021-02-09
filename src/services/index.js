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

  static getGameRoom = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/games/${id}`);

      return await res;
    } catch (error) {
      return error;
    }
  };

  static patchChoice = async (id, username, choice) => {
    try {
      const res = await axios.patch(`${baseUrl}/games/${id}`, {
        username,
        choice,
      });

      return await res;
    } catch (error) {
      return error;
    }
  };

  static createUser = async (email, username, password) => {
    try {
      const register = await axios.post(`http://localhost:3001/apis/user`, {
        email,
        username,
        password,
      });

      return register;
    } catch (error) {
      return error;
    }
  };
}

export default api;
