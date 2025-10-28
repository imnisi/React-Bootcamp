import React from "react";
import "../CSS/TodoItems.css";
import CrossIcon from "../assets/cross-icon.png";
import CheckedIcon from "../assets/checked-icon.jpg";
import UncheckedIcon from "../assets/uncheck-icon.png";

function TodoItems({ id, display, text, onToggle, removeTodos }) {
  return (
    <div className="todoitems">
      <div className="todoitems-container" onClick={() => onToggle(id)}>
        {display === "" ? (
          <img
            src={UncheckedIcon}
            alt="Unchecked"
            className="icons unchecked"
          />
        ) : (
          <img src={CheckedIcon} alt="CheckedIcon" className="icons" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      {display === "checked" && (
        <img
          src={CrossIcon}
          alt="Cross"
          className="icons cross-icon"
          onClick={() => removeTodos(id)}
        />
      )}
    </div>
  );
}

export default TodoItems;
