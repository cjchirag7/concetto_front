import React, { Component } from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";

const styles = theme => ({
  logo: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  moon: {
    display: "flex",
    zIndex: 200,
    height: "400px",
    bottom: 0,
    position: "fixed"
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 45
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset;
    const { offset } = this.state;
    if (scrollTop > window.innerHeight / 10) {
      if (offset !== 55) {
        this.setState({
          offset: 55
        });
      }
    } else {
      this.setState({
        offset: 45 + (scrollTop / window.innerHeight) * 100
      });
      //   console.log(scrollTop + " " + window.innerHeight);
    }
  };

  render() {
    const { showLogo, classes } = this.props;
    const { offset } = this.state;
    return (
      <div>
        <div className={classes.logo}>
          {showLogo ? (
            ""
          ) : (
            <img src="./assets/logo.png" className="logo-home" alt={Loading} />
          )}
        </div>
        {
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <img
              src="./assets/moon_surface.png"
              className={classes.moon}
              alt="moon"
              style={{ transform: "translateY(" + offset + "vh)" }}
            />
          </div>
        }
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
