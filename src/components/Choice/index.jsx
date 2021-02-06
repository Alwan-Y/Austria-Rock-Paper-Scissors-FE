import React from "react";

const Choice = ({ choice }) => {
  return (
    <div className="col-md">
      <div className="form-groups choice">
        <div className={`btn choice__btn choice__${choice}`}></div>
      </div>
    </div>
  );
};

export default Choice;
