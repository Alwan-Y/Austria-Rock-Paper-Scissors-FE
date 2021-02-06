import { useParams } from "react-router-dom";

import Choice from "components/common/Choice";

const Game = () => {
  const { id } = useParams();

  return (
    <div className="room container">
      <h2>Game id : {id}</h2>
      <div className="row mt-4 text-muted">
        <h5 className="col-md-6">Player 1 : Player 1</h5>
        <h5 className="col-md-3 offset-md-3 ">Player 2 : Player 2</h5>
      </div>
      <div className="row text-muted">
        <h5 className="col-md-6">Player 1 Choice : Wait...</h5>
        <h5 className="col-md-3 offset-md-3 ">Player 2 Choice : Wait...</h5>
      </div>
      <div className="row  room__choice">
        <Choice choice="rock" />
        <Choice choice="paper" />
        <Choice choice="scissor" />
      </div>
    </div>
  );
};

export default Game;
