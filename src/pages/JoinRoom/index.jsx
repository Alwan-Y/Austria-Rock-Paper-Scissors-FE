import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "components/Modal";
import Button from "components/Button";

import "./style.scss";

const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");

  const handleChange = (e) => {
    setRoomId(e.target.value);
  };
  const handleJoin = () => {
    console.log(`joining room ${roomId}`);
  };

  return (
    <>
      <div className="container join-room">
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
            <Link to="/game">
              <Button type="secondary" label="Create Room" />
            </Link>
          </div>
        </div>
      </div>
      <Modal handleChange={handleChange} handleJoin={handleJoin} />
    </>
  );
};

export default JoinRoom;
