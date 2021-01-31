import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="container joinRoom">
        <div className="row joinRoom__buttons ">
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Join Room
            </button>
          </div>
          <div className="col-md-4">
            <Link to="/game">
              <div className="btn btn-secondary">Create Room</div>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Join Room
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Room id</label>
                  <input
                    type="input"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter room id"
                    onChange={handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Input room id to join.
                  </small>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleJoin}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Join Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
