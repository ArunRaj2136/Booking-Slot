import React from "react";
import "./input.scss";

function Input({ mandatory = true, label, type, value, onChangeHandler }) {
  return (
    <div className="inputGroup">
      <div className="inputGroup__header">
        <label htmlFor="label" className="inputGroup__label">
          {label}
        </label>
        {mandatory && <span className="inputGroup__mandatory">*</span>}
      </div>
      <input
        type={type}
        id="label"
        className="inputGroup__type"
        value={value}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
