import React from "react";

const Choice = ({ choice }) => {
  return (
    <div className="col-md c">
      <div className={`btn choice__btn choice__${choice}`}></div>
    </div>
  );
};

export default Choice;
