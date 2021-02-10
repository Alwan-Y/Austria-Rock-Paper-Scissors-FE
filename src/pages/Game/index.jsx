import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

import api from "services";

import Button from "components/common/Button";
import Choices from "components/common/Choices";

const Game = () => {
  const [gameRoom, setGameRoom] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_URL);

    socket.on("oke", (msg) => {
      console.log(msg);
    });

    socket.emit("room", id);
  }, [id]);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await api.getGameRoom(id);

        setGameRoom(res.data.room);
      } catch (error) {
        return error;
      }
    }

    fetch();
  });

  const onRestart = async () => {
    try {
      const res = await api.createNewGameRound(id, gameRoom.playerOneUsername);
      setGameRoom(res.data.room);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="room container">
      <h2>Game id : {id}</h2>
      <div className="row mt-4 text-muted">
        <h5 className="col-md-6">Player 1 : {gameRoom.playerOneUsername}</h5>
        <h5 className="col-md-3 offset-md-3 ">
          Player 2 : {gameRoom.playerTwoUsername}
        </h5>
      </div>
      {gameRoom ? (
        gameRoom.Histories[0].result ? (
          <div className="container">
            <h1>{gameRoom.Histories[0].result}</h1>
            <Button label="restart" onClick={onRestart} />
          </div>
        ) : (
          <div className="row room__choice-row">
            {gameRoom.Histories[0].playerOneChoice ? (
              <h5>{gameRoom.playerOneUsername} already choice</h5>
            ) : (
              <Choices player={gameRoom.playerOneUsername} />
            )}

            {gameRoom.Histories[0].playerTwoChoice ? (
              <h5>{gameRoom.playerTwoUsername} already choice</h5>
            ) : (
              <Choices player={gameRoom.playerTwoUsername} />
            )}
          </div>
        )
      ) : null}
    </div>
  );
};

export default Game;
