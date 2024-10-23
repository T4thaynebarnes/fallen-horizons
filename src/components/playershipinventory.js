import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";
const PlayerShipInventory = () => {
  const ships = [
    {
      id: 1,
      name: "Skyrunner",
      power: 20,
      health: 100,
      gold: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisH699TqWiZAL5UZrDX3suQuMG-DqFFYJxg&s",
    },
    {
      id: 2,
      name: "Starblade",
      power: 40,
      health: 200,
      gold: 200,
      image: "https://example.com/starblade.jpg",
    },
  ];

  return (
    <>
      <Container style={{ width: "" }}>
        <Accordion>
          {ships.map((ship, index) => (
            <Accordion.Item key={index}>
              <Accordion.Header>{ship.name}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-2">
                      <Col>
                        <img
                          src={ship.image}
                          alt={ship.name}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Col>
                    </div>
                    <div className="p-2 ms-auto">Second item</div>
                    <div className="vr" />
                    <div className="p-2">Third item</div>
                  </Stack>

                  <Col></Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default PlayerShipInventory;
