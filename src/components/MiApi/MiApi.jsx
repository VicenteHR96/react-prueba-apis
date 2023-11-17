import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import Card from "../Card/Card";
import Buscador from "../Buscador/Buscador";

function MiApi() {
  const [games, setGames] = useState([]);

  const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "78d3dc9025msh4301b3bf92a8ba9p1ace50jsn6e29eab4852c",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const getDataGames = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      const dataOrdenada = data
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, 20);
      setGames(dataOrdenada);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataGames();
  });

  const [buscador, setBuscador] = useState("");

  return (
    <>
      <Row className="cont-buscador">
        <Buscador buscador={buscador} setBuscador={setBuscador}></Buscador>
      </Row>
      {games.length > 0 ? (
        games
          .filter((game) => {
            return (
              game.title.toLowerCase().includes(buscador.toLowerCase()) ||
              game.genre.toLowerCase().includes(buscador.toLowerCase()) ||
              game.developer.toLowerCase().includes(buscador.toLowerCase())
            );
          })
          .map((game, index) => (
            <Col key={index} className="col-card" sm={12} md={6} lg={3}>
              <Card game={game} />
            </Col>
          ))
      ) : (
        <Row className="spinner">
          <Spinner animation="border" variant="light" />
        </Row>
      )}
      ;
    </>
  );
}

export default MiApi;
