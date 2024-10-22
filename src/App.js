import Testing from "./components/testing";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Container id="game-ctnr" fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>
            <Row>
              <Container>something</Container>
            </Row>
            <Row>
              <Container>something</Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
