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

  static getHistory = async () => {
    try {
      const res = await axios.get(`${baseUrl}/history`);

      return await res;
    } catch (error) {
      return error;
    }
  };

  static createNewGameRound = async (roomId, username) => {
    try {
      const res = await axios.post(`${baseUrl}/games/${roomId}`, {
        username,
      });

      return await res;
    } catch (error) {
      return error;
    }
  };

  static createUser = async (email, username, password) => {
    try {
      const register = await axios.post(`${baseUrl}/user`, {
        email,
        username,
        password,
      });

      return register;
    } catch (error) {
      return error;
    }
  };

  static username = async (email) => {
    try {
      const statusAndUsername = await axios.post(`${baseUrl}/get-status`, {
        email,
      });

      return statusAndUsername;
    } catch (error) {
      return error;
    }
  };
}

export default api;
