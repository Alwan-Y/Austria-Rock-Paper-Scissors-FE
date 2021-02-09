import api from "services";
import { useParams } from "react-router-dom";

const Choice = ({ choice, player }) => {
  const { id } = useParams();

  const handleClick = async () => {
    try {
      await api.patchChoice(id, player, choice);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="col-md-12">
      <div
        className={`btn choice__btn choice__${choice}`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Choice;
