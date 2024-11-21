import React from "react";
import "./primaryButton.css";

const PrimaryButton = ({
  label,
  backgroundColor,
  borderColor,
  color,
  background,
}) => {
  return (
    <div
      className="primary_button"
      style={{
        color: color,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        background: background,
      }}
    >
      {label}
    </div>
  );
};

export default PrimaryButton;
