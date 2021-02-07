import Choice from "components/common/Choice";

const Choices = ({ player }) => {
  return (
    <div className="row col-md-6  room__choice">
      <Choice choice="rock" player={player} />
      <Choice choice="paper" player={player} />
      <Choice choice="scissor" player={player} />
    </div>
  );
};

export default Choices;
