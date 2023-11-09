import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import MiApi from "./components/MiApi/MiApi";
import MyForm from "./components/MyForm/MyForm";

function App() {
  return (
    <div className="App">
      <Row className="nav-row">
        <Col>
          <NavBar></NavBar>
        </Col>
      </Row>
      <Row className="title-page">
        <h2>Catálogo de juegos Free to Play</h2>
      </Row>
      <Row className="cards-row">
        <MiApi></MiApi>
      </Row>
    </div>
  );
}

export default App;
