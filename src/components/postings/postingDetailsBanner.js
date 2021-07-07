import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import back from "../../assets/back.svg";
import office from "../../assets/office.jpg";
import logo from "../../assets/sr_logo.png";

function PostingDetailsBanner({ history }) {
  const onBackPage = () => {
    history.goBack();
  };

  return (
    // @todo: Integrate lazy loading to load the banner picture of the job post
    <Container>
      <Row data-test="back" className="back">
        <Image
          className="back-image"
          onClick={onBackPage}
          src={back}
          responsive="true"
        />
        Back to the list
      </Row>

      {/*Picture download from this link: https://unsplash.com/photos/TpGIpUF67po*/}
      <Image
        data-test="posting-banner"
        className="banner-image"
        src={office}
        responsive="true"
      />
      <Row className="logo-row">
        <Image data-test="posting-logo" className="logo" src={logo} />
      </Row>
    </Container>
  );
}

export default PostingDetailsBanner;
