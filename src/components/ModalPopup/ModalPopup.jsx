import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Formulario from "../formulario/Formulario";
import Alert from "../alert/Alert.jsx";
import SocialButton from "../SocialButton/SocialButton";
import {
  faLinkedinIn,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function ModalPopup({ show, handleClose }) {
  const [errors, setErrors] = useState({ mensaje: "", color: "" });
  return (
    <>
      <Modal show={show} onHide={handleClose} data-bs-theme="">
        <Modal.Header closeButton>
          <Modal.Title>Crea tu cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rrssButtons">
            <SocialButton icon={faFacebook} colorHover="blue" />
            <SocialButton icon={faGithub} />
            <SocialButton icon={faLinkedinIn} />
          </div>
          <p style={{ textAlign: "center" }}>
            O usa tu e-mail para registrarte:
          </p>
          <Formulario setErrors={setErrors}></Formulario>
          <div className="alertDiv">
            {errors.mensaje != "" && (
              <Alert mensaje={errors.mensaje} color={errors.color}></Alert>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPopup;
