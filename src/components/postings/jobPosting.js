import React from "react";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import { countryNameFromCode } from "../../utils/getCountryName";
import moment from "moment";
import LazyLoad from "react-lazyload";
import logo from "../../assets/sr_logo.png";

export default ({ postings, setPostingId }) => {
  if (Object.keys(postings.content).length === 0) {
    return (
      <Container className="text-center no-job-found">
        No open positions
      </Container>
    );
  }

  return (
    Object.keys(postings.content).length > 0 &&
    Object.entries(postings.content).map((item, key) => {
      const country = countryNameFromCode(item[1].location.country);

      return (
        <LazyLoad key={key} height={200} offset={10} debounce={100}>
          <Card
            as="a"
            data-test="posting"
            className="posting"
            onClick={() => setPostingId(item[1].id)}
          >
            <Row className="row">
              <Col xs={1} md={1} className="column">
                <CardDeck className="deck">
                  <Card.Img className="image" variant="top" src={logo} />
                </CardDeck>
              </Col>

              <Col xs={11} md={11}>
                <Card.Body>
                  <Card.Title data-test="posting-name" className="title">
                    {item[1].name}
                  </Card.Title>
                  <Card.Text data-test="posting-location" className="location">
                    {`${item[1].location.city}, ${country}`}
                  </Card.Text>
                  <Card.Text
                    data-test="posting-department"
                    className="department"
                  >
                    {item[1].department.label}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>

            <Row className="info">
              <Col xs md="2" className="label text-center me-2 employment">
                {item[1].typeOfEmployment.label}
              </Col>
              <Col xs md="2" className="label text-center me-2 experience">
                {item[1].experienceLevel.label}
              </Col>
              <Col className="text-end timestamp mt-2">
                {moment(item[1].releasedDate).fromNow()}
              </Col>
            </Row>
          </Card>
        </LazyLoad>
      );
    })
  );
};
