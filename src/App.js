import Testing from "./components/testing";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerShipInventory from "./components/playershipinventory";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Container id="game-ctnr" fluid>
        <Navbar />
      </Container>
    </div>
  );
}

export default App;
