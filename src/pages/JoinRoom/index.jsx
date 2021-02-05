import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavigationBar from "components/common/NavigationBar";
import Footer from "components/common/Footer";
import Modal from "components/common/Modal";
import Button from "components/common/Button";

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
      <NavigationBar></NavigationBar>
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
      <Footer></Footer>
    </>
  );
};

export default JoinRoom;
