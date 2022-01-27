import Page from 'components/Page';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  Table,
  Button,
  Nav,
  Navbar,
  Media,
  CardText,
  CardTitle
} from 'reactstrap';
import CircleLoader
  from "react-spinners/CircleLoader";
import { css } from "@emotion/core";
import {
  baseUrl, twitterToken
} from '../assets/services';
import { Link } from 'react-router-dom';
import { TableRow, TableCell, TableHead, TableBody, TableContainer } from '@material-ui/core';
import "../styles/styles.css";
import "../styles/imageoverlay.css";
import queryString from 'query-string';

import TwitterLogin from 'components/Twitter/TwitterLogin';

const request = require("request");
const uuidv4 = require('uuid/v4');
const crypto = require('crypto');
const twitter_domian = "https://api.twitter.com/1.1/direct_messages/events/new.json";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const width = window.innerWidth;

class DashboardPage extends React.Component {
  state = {
    smallScreen: false,
    oauth_token: null,
    oauth_token_secret: null

  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    if (width < 600) {
      this.setState({ smallScreen: true });
    }

  }

  async twitterLogin() {

    //get oauth
    var response = await fetch(baseUrl + twitterToken);

    if (response.status == 200) {
      var data = await response.json();
      if (data != null) {
        this.setState({ oauth_token: data.oauth_token, oauth_token_secret: data.oauth_token_secret });
      }
    }

    //authorize
    // window.location.href = await fetch('https://api.twitter.com/oauth/authorize?oauth_token=' + data.oauth_token);
    window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${data.oauth_token}`;

    // if (authorizeResponse.status == 200) {
    //   console.log('ok')
    // }
  }

  componentDidUpdate() {
    (async () => {

      const { oauth_token, oauth_verifier } = queryString.parse(window.location.search);
      console.log(oauth_token)
      // if (oauth_token && oauth_verifier) {
      //   try {
      //     //Oauth Step 3
      //     await axios({
      //       url: `${apiPath}/twitter/oauth/access_token`,
      //       method: 'POST',
      //       data: { oauth_token, oauth_verifier }
      //     });
      //   } catch (error) {
      //     console.error(error);
      //   }
      // }

      // try {
      //   //Authenticated Resource Access
      //   const { data: { name, profile_image_url_https, status, entities } } = await axios({
      //     url: `${apiPath}/twitter/users/profile_banner`,
      //     method: 'GET'
      //   });

      //   setIsLoggedIn(true);
      //   setName(name);
      //   setImageUrl(profile_image_url_https);
      //   setStatus(status.text);
      //   setUrl(entities.url.urls[0].expanded_url);
      // } catch (error) {
      //   console.error(error);
      // }


    })();
  }


  render() {

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
      >

        <div><h6>Welcome</h6>


          {/* <Button size="m" onClick={() => this.twitterLogin()}>
            Log in with Twitter
          </Button> */}

          <TwitterLogin />

        </div>

      </Page>
    );
  }
}
export default DashboardPage;
