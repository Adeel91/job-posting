import React from "react";
import { Row, Col } from "react-bootstrap";

function Selected({ selectedDepartment, selectedCountry, onClearPostings }) {
  return (
    <Row className="mb-3">
      {selectedDepartment && (
        <Col xs md={5}>
          Selected Department:{" "}
          <div className="selected">{selectedDepartment}</div>
        </Col>
      )}
      {selectedCountry && (
        <Col xs md={5}>
          Selected Country: <div className="selected">{selectedCountry}</div>
        </Col>
      )}
      {(selectedDepartment || selectedCountry) && (
        <Col
          onClick={() => onClearPostings("")}
          className="mt-4 reset"
          xs={2}
          md={1}
        >
          Reset
        </Col>
      )}
    </Row>
  );
}

export default Selected;
