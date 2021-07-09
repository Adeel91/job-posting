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
                src="https://www.smartrecruiters.com/wp-content/themes/smartrecruiters/new-template/img/en_us/global/srlogo-2019-white.png"
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
