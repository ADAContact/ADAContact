import React from 'react';
import { Link, Redirect } from "react-router-dom";

import { Navbar, Nav, NavItem, Row } from 'reactstrap';
const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          <Row>
          ADA Contact - map your social media profiles to your ADA Wallet. 
          </Row>
          {/* <Link to={{ pathname: '/termsandpolicy' }}>Terms and policy</Link> */}
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
