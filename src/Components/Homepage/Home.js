import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom"
import "../../Styles/Body.css";

const Home = () => {
  //const [scroll, setScroll] = useState(0);



  return (
    <>
      <div fluid className="upperBody">
        <Col>
          <Row className="gridRows"
            style={{ ...styles.colorbackground, ...styles.gridRows }}
            xs={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Col className="desc" style={styles.gridCol} xs={12} sm={12} md={6} lg={6} xl={6}>
              <h2>Welcome to OSCA!</h2>
            </Col>
            <Col
              style={{ ...styles.gridCol }}
              className="seprator"
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
            >
              <p>
                A platform of resources; created and and organised by skilled
                individuals of planet Earth.
              </p>
            </Col>
          </Row>
          <Row
            className="center gridRows"
            style={{ ...styles.gridRows, ...styles.whiteBackground }}
            xs={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="headingCol">
              <h1 className="headingPart1">Let's Start</h1>
              <h1 className="headingPart2">Learning!</h1>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="buttonCol">
              <Row>
                <Link to="/learnskill">
                  <Button
                    style={styles.button1}
                    size="small"
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="button1"
                  >
                    Learn A Skill{" "}
                  </Button>
                </Link>
              </Row>
              <Row style={{ paddingTop: "10%" }}>
                <Button
                  style={styles.button2}
                  type="submit"
                  variant="contained"
                  size="small"
                  color="secondry"
                  className="button2"
                >
                  Track Your Progress
                </Button>
              </Row>
            </Col>
          </Row>
          <div
            className="rectangle"
          // onClick={scroll < 415 ? scrollToBottom : scrollToTop}
          >
            <div className="circle"></div>
          </div>
        </Col>
      </div>
    </>
  );
};

const styles = {
  gridRows: {
    paddingTop: "122px",
    paddingRight: "8%",
    paddingLeft: "8%",
    paddingBottom: "90px",
    height: "50vh"
  },
  gridCol: {
    paddingLeft: "8vw",
    paddingRight: "8vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  whiteBackground: {
    backgroundColor: "#F5F5F5",
  },
  colorbackground: {
    background: "linear-gradient(0deg, #8750A9, #8750A9), #C4C4C4",
  },

  button1: {
    fontSize: "1.9vh",
    background: "#8750A9",
    fontWeight: "500",
    border: "1px solid #8750A9",
    boxSizing: "border-box",
    borderRadius: "2rem",
  },
  button2: {
    fontSize: "1.9vh",
    fontWeight: "500",
    background: "#FFFFFF",
    color: "#8750A9",
    border: "1px solid #8750A9",
    boxSizing: "border-box",
    borderRadius: "2rem",
  },
};

export default Home;
