import React from "react";
import { Navbar, Container, Image, Col } from "react-bootstrap";

function Index() {
  return (
    <Navbar className="layout-section" fixed="top">
      <Container className="my-3">
        <Navbar.Brand>
          <a href="/">
            <Col xs={6} md={6}>
              <Image
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                fluid
              />
            </Col>
          </a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Index;
