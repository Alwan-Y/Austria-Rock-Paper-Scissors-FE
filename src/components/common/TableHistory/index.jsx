import React, { useState, useEffect } from "react";

import api from "services";

const TableHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await api.getHistory();

        setHistory(res.data);
      } catch (error) {
        return error;
      }
    }

    fetch();
  }, []);

  return (
    <div className="container">
      <h5>History</h5>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">HistoryId</th>
            <th scope="col">Player 1 Username</th>
            <th scope="col">Player 2 Username</th>
            <th scope="col">Player 1 Choice</th>
            <th scope="col">Player 2 Choice</th>
            <th scope="col">Result</th>
            <th scope="col">RoomId</th>
          </tr>
        </thead>
        <tbody>
          {history.map((data) => (
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.Room.playerOneUsername}</td>
              <td>{data.Room.playerTwoUsername}</td>
              <td>{data.playerOneChoice}</td>
              <td>{data.playerTwoChoice}</td>
              <td>{data.result}</td>
              <td>{data.roomId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHistory;
