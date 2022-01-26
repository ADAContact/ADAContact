import Page from 'components/Page';
import React from 'react';
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
  baseUrl, getLatestProjects, getProjectsStats, getRecentlyUpdatedProjects, liveProjectSales, getMostViewedProjects, getFeaturedProjectsList,
  getProjectTokensWalletRankings, getProjectTokensTransactionRankings
} from '../assets/services';
import { Link } from 'react-router-dom';
import { TableRow, TableCell, TableHead, TableBody, TableContainer } from '@material-ui/core';
import "../styles/styles.css";
import Paper from '@material-ui/core/Paper';


import CircularImage from 'utils/CircularImage';
import "../styles/imageoverlay.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const width = window.innerWidth;

class DashboardPage extends React.Component {
  state = {
    smallScreen: false,

  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    if (width < 600) {
      this.setState({ smallScreen: true });
    }

  }


  render() {

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
      >

        <div><h6>Welcome</h6></div>


      </Page>
    );
  }
}
export default DashboardPage;
