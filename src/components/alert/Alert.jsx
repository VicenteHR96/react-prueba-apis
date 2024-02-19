import React from "react";
import { Alert as AlertaB } from "react-bootstrap";

const Alert = ({ mensaje, color }) => {
  return (
    <AlertaB className="alert" variant={color}>
      {mensaje}
    </AlertaB>
  );
};

export default Alert;
