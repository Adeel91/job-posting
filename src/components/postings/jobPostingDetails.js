import React, { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { countryNameFromCode } from "../../utils/getCountryName";
import SweetAlert from "react-bootstrap-sweetalert";
import moment from "moment";
import address from "../../assets/address.svg";

export default ({ postingDetails }) => {
  const [showAlert, setShowAlert] = useState(false);
  const onApplyButtonClick = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    postingDetails && (
      <Container data-test="posting">
        <Row className="text-center">
          <Card.Title data-test="posting-name" className="mb-2 title">
            {postingDetails.name}
          </Card.Title>
        </Row>

        <Row className="text-center">
          <Col>
            <Image
              data-test="posting-location"
              className="image"
              src={address}
            />
            {`${postingDetails.location.address}, ${
              postingDetails.location.postalCode
                ? postingDetails.location.postalCode
                : ""
            } ${postingDetails.location.city}, ${countryNameFromCode(
              postingDetails.location.country
            )}`}
          </Col>
        </Row>

        <Row className="text-center">
          <Col>{moment(postingDetails.releasedDate).fromNow()}</Col>
        </Row>

        <div className="text-center labels">
          <div className="employment">
            {postingDetails.typeOfEmployment.label}
          </div>
          <div className="experience">
            {postingDetails.experienceLevel.label}
          </div>
          {postingDetails.location.remote && (
            <div className="remote">Remote</div>
          )}
        </div>

        <hr />

        <Row>
          <Card.Title className="mb-3 section">
            {postingDetails.jobAd.sections.companyDescription.title}
          </Card.Title>
          <Col
            data-test="company-description"
            className="description"
            dangerouslySetInnerHTML={{
              __html: postingDetails.jobAd.sections.companyDescription.text,
            }}
          />
        </Row>

        <Row>
          <Card.Title className="mb-3 section">
            {postingDetails.jobAd.sections.jobDescription.title}
          </Card.Title>
          <Col
            data-test="job-description"
            className="description"
            dangerouslySetInnerHTML={{
              __html: postingDetails.jobAd.sections.jobDescription.text,
            }}
          />
        </Row>

        <Row>
          <Card.Title className="mb-3 section">
            {postingDetails.jobAd.sections.qualifications.title}
          </Card.Title>
          <Col
            data-test="job-qualifications"
            className="description"
            dangerouslySetInnerHTML={{
              __html: postingDetails.jobAd.sections.qualifications.text,
            }}
          />
        </Row>

        <Row>
          <Card.Title className="mb-3 section">
            {postingDetails.jobAd.sections.additionalInformation.title}
          </Card.Title>
          <Col
            data-test="additional-description"
            className="description"
            dangerouslySetInnerHTML={{
              __html: postingDetails.jobAd.sections.additionalInformation.text,
            }}
          />
        </Row>
        <hr />

        <Row className="text-center">
          <Button onClick={() => onApplyButtonClick()} className="apply">
            Apply
          </Button>
        </Row>

        <SweetAlert
          show={showAlert}
          timeout={10000}
          showConfirm={false}
          onConfirm={() => console.log()}
          success
          title="Your application has been submitted!"
        >
          Thank you! we will review your application and get back to you
          shortly.
        </SweetAlert>
      </Container>
    )
  );
};
