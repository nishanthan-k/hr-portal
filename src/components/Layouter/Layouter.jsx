import React from "react";
import "./Layout.scss"
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

const Layouter = ({ children }) => {
  return (
    <Grid celled style={ { margin: 0, boxSizing: "border-box", padding: "0" } }>
      <Grid.Row style={ { marginLeft: 0, marginRight: 0 } }>
        <Header />
      </Grid.Row>

      <Grid.Row className="main-row" style={ { marginLeft: 0, marginRight: 0 } }>
        <div className="main-row">
          <div className="sidebar-container"><SideBar /></div>
          <div className="children-container">{ children }</div>
        </div>
      </Grid.Row>

    </Grid>
  );
};

Layouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layouter;