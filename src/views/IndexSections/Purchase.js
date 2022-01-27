import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import TwitterLogin from "components/Twitter/TwitterLogin";

export default function Purchase() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              How does it work?
            </h2>
            <h4 className="description">
              ADA Contact will connect into your favourite social media account with minimal permission to verify you are the owner of said account.
              Once we have verified you are the owner we will reserve your social media account within our system.
            </h4>

            <h4 className="description">
              Once your account has been reserved we will allow you to purchase the ada contact nft. The account you use to purchase the ada contact with will be
              sent the NFT that is used to map between your social media accounts and your ADA wallet.
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <TwitterLogin />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />

      </Container>
    </div>
  );
}
