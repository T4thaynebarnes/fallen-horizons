import React from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, Route, Routes } from "react-router-dom";
import Testing from "./testing";
import PlayerShipInventory from "./playershipinventory";

const Navbar = () => {
  return (
    <>
      <Container id="navbar-ctnr" fluid>
        <Stack direction="horizontal" gap={3}>
          <Container className="p-2">
            <Dropdown as={ButtonGroup}>
              <Button variant="secondary">Main Menu</Button>

              <Dropdown.Toggle
                split
                variant="danger"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu data-bs-theme="dark">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
          <div className="p-2 ms-auto">
            <Container>
              <Dropdown as={ButtonGroup}>
                <Button variant="secondary">Captian's log</Button>

                <Dropdown.Toggle
                  split
                  variant="secondary"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu variant="danger">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </div>
          <div className="p-2">Third item</div>
        </Stack>
      </Container>
      <Routes>
        <Route path="/" element={<PlayerShipInventory />} />
      </Routes>
    </>
  );
};

export default Navbar;
