import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Testing = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col id="" md={3}>
            {/* <FleetOverview /> */}some shizznitt
          </Col>
          <Col md={6}>{/* <MissionControl /> */}</Col>
          <Col md={3}>
            {/* <Resources /> */}
            {/* <BattleReadiness /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testing;
