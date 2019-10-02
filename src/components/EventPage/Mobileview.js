import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "../EventDetail/Styles.css";
import DepartmentEvent from "./DepartmentEvent";
import ClubEvent from "./ClubEvent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

const styles = theme => ({
  mobileTab: {
    border: "1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  tabRoot: {
    minWidth: "50%",
    textTransform: "initial",
    fontWeight: "bold",
    backgroundColor: "white",
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: "#000",
      opacity: 1
    },
    "&$tabSelected": {
      color: "white",
      backgroundColor: theme.palette.secondary.dark,
      fontWeight: "bold"
    }
  },
  tabsRoot: {
    minWidth: "50%",
    borderBottom: "1px solid #e8e8e8"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tab: {
    width: "100%"
  },
  tabSelected: {}
});

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.departmentShow = this.departmentShow.bind(this);
    this.clubShow = this.clubShow.bind(this);
  }
  state = {
    active: 0
  };

  clubShow = active => {
    this.setState({
      active: 1
    });
  };
  departmentShow = active => {
    this.setState({
      active: 0
    });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleChange = (event, active) => {
    this.setState({ active: active });
  };

  render() {
    const { classes, events } = this.props;
    return (
      <div className={classes.mobileTab}>
        <AppBar
          style={{ backgroundColor: "rgba(1,1,1,0.1)", overflow: "hidden" }}
          position="fixed"
        >
          <Tabs
            value={this.state.active}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="secondary"
            className={classes.tab}
          >
            <Tab
              label="Department"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              onClick={this.departmentShow}
            />
            <Tab
              label="Club"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              onClick={this.clubShow}
            />
          </Tabs>
        </AppBar>
        {this.state.active === 1 && <ClubEvent events={events} />}
        {this.state.active === 0 && <DepartmentEvent />}
        <div></div>
      </div>
    );
  }
}

export default withStyles(styles)(EventDetail);