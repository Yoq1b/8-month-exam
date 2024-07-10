import React from "react";
import "../css/checkbox.css";

const Checkbox = ({ id }) => {
  const uniqueId = `checkbox-${id}`; // Dinamik id generatsiyasi

  return (
    <div className="checkbox-wrapper-18">
      <div className="round">
        <input type="checkbox" id={uniqueId} />
        <label htmlFor={uniqueId}></label>
      </div>
    </div>
  );
};

export default Checkbox;
