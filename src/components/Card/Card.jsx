import React from "react";
import { Button, Card as CardB } from "react-bootstrap";

const Card = ({ game }) => {
  return (
    <CardB
      style={{ minWidth: "15rem", width: "18rem", height: "25rem" }}
      className="card"
    >
      <CardB.Img
        variant="top"
        src={game.thumbnail}
        style={{ height: "10rem", objetFit: "fit" }}
      />
      <CardB.Body>
        <CardB.Title>{game.title}</CardB.Title>
        <CardB.Text>Género: {game.genre}</CardB.Text>
        <CardB.Text>Desarrollador: {game.developer}</CardB.Text>
        <Button variant="primary" href={game.game_url} target="blank">
          Descargar
        </Button>
      </CardB.Body>
    </CardB>
  );
};

export default Card;
