import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "services";

import NavigationBar from "components/common/NavigationBar";
import Footer from "components/common/Footer";
import Modal from "components/common/Modal";
import Button from "components/common/Button";

const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setRoomId(e.target.value);
  };
  const handleJoin = async () => {
    try {
      const res = await api.joinRoom(roomId, "player2");

      if (res) {
        history.push(`/game/${roomId}`);
      }
    } catch (error) {
      return error;
    }
  };

  const handleCreateRoom = async () => {
    try {
      const res = await api.createRoom("player1");

      if (res) {
        history.push(`/game/${res.data.room.id}`);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="jumbotron jumbotron-fluid join-room join-room--background">
        <div className="container">
          <div className="row join-room__button ">
            <div className="col-md-4">
              <Button
                label="Join Room"
                dataToggle="modal"
                dataTarget="#exampleModalCenter"
                type="primary"
              />
            </div>
            <div className="col-md-4">
              <Button
                type="secondary"
                onClick={handleCreateRoom}
                label="Create Room"
              />
            </div>
          </div>
        </div>
        <Modal handleChange={handleChange} handleJoin={handleJoin} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default JoinRoom;
