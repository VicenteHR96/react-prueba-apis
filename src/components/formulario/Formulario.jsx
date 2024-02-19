import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = ({ setErrors }) => {
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrors({
        mensaje: "Todos los campos son obligatorios",
        color: "danger",
      });
      return;
    }

    if (!validEmail.test(email)) {
      setErrors({ mensaje: "Tu E-mail es inválido", color: "danger" });
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ mensaje: "Tus contraseñas no coinciden.", color: "danger" });
      return;
    }

    setErrors({
      mensaje: "Te has registrado de manera correcta",
      color: "success",
    });
  };

  return (
    <Form
      onSubmit={onSubmit}
      style={{
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Form.Control
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={onChangeName}
        style={{ width: "100%" }}
      ></Form.Control>
      <Form.Control
        type="email"
        name="email"
        placeholder="Correo electrónico"
        onChange={onChangeEmail}
        style={{ width: "100%" }}
      />
      <Form.Control
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={onChangePassword}
        style={{ width: "100%" }}
      />
      <Form.Control
        type="password"
        name="confirmPassword"
        placeholder="Confirmar contraseña"
        onChange={onChangeConfirmPassword}
        style={{ width: "100%" }}
      />
      <Button type="submit" variant="primary">
        Registrarse
      </Button>
    </Form>
  );
};

export default Formulario;
