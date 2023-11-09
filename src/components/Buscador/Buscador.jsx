import { Form } from "react-bootstrap";

const Buscador = ({ buscador, setBuscador }) => {
  return (
    <Form.Control
      type="search"
      placeholder="Filtra tu búsqueda..."
      className="me-2"
      aria-label="Search"
      style={{ width: "50vw" }}
      value={buscador}
      onChange={(e) => {
        setBuscador(e.target.value);
      }}
    />
  );
};

export default Buscador;
