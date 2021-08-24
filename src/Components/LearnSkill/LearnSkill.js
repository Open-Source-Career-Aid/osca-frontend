import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Styles/Learn.css";
import MyMobile from "../../MyHelperCompnents/MyMobile";
import MyDesktop from "../../MyHelperCompnents/MyDesktop";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";

const LearnSkill = () => {
  const [skills, setSkills] = useState([]);

  const handleSearch = (data) => {
    data
      .then((res) => {
        console.log(res);
        const set = res.map((details) => {
          return {
            name: details.skill,
            skill: details.is_superskill ? "SuperSkill" : "SubSkill",
            prerequisite: [{ value: "" }],
            tags: details.tags.map((det) => {
              return { value: det.tagName };
            }),
          };
        });
        // console.log(set[0]);
        setSkills(set);
      })
      .catch((err) => {
        setSkills([]);
      });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const requestData = await fetch(
        "http://osca-api.herokuapp.com/form/learn-skill/?searchData="
      );
      const data = requestData.json();
      handleSearch(data);
      return data;
    };
    fetchData();
  }, []);

  return (
    <>
      <Container className="SpacingTop">
        <SearchBar handleSearch={handleSearch} />
        <Row className="pt-3">
          <MyDesktop>
            <Col md={{ span: 6, offset: 1 }} className="text-center kn-style">
              No previous knowledge required!
            </Col>
          </MyDesktop>
          <Col md={{ span: 1, offset: 1 }} xs={{ span: 1, offset: 5 }} xl={1}>
            <div className="skillset justify-content-end text-start">
              Superskill
            </div>
          </Col>
          <Col md={1} xl={1} xs={{ span: 1 }}>
            <div className="skillset active justify-content-start">
              Subskills
            </div>
          </Col>
        </Row>
        <MyMobile>
          <Row>
            <Container className="learn-txt">Skillset</Container>
          </Row>
        </MyMobile>
        {skills.map((skill, idx) => {
          return (
            <Row className="my-5 py-5">
              <Col md={{ span: 8, offset: 2 }}>
                <div className="card-css">
                  <Row className="pt-2">
                    <MyDesktop>
                      <Col
                        lg={{ span: 6, offset: 1 }}
                        md={{ span: 6, offset: 1 }}
                      >
                        <div className="card-heading">
                          <Link className="linkTo" to="/webD">
                            {skill.name}
                          </Link>
                        </div>
                      </Col>
                      <Col md={1} lg={1} className="translate-css">
                        <div
                          className={
                            skill.skill === "SuperSkill"
                              ? "skill text-center"
                              : "skillRed text-center justify-content-center"
                          }
                        >
                          {skill.skill}
                        </div>
                      </Col>
                      <Col
                        md={{ span: 3, offset: 1 }}
                        lg={{ span: 3, offset: 1 }}
                        className="text-end"
                      >
                        <div className="track">Track Your Progress</div>
                      </Col>
                    </MyDesktop>
                    <MyMobile>
                      <Col xs={{ span: 7 }} sm={{ span: 7 }}>
                        <span>
                          <div className="card-heading mobile-card">
                            <Link className="linkTo">{skill.name}</Link>
                          </div>
                        </span>
                      </Col>
                      <Col
                        xs={2}
                        className="justify-content-start translate-css text-center"
                      >
                        <div
                          className={
                            skill.skill === "SuperSkill"
                              ? "skill text-center"
                              : "skillRed text-center justify-content-center"
                          }
                        >
                          {skill.skill}
                        </div>
                      </Col>
                      <Col xs={3} className="text-end icon-time">
                        <i class="fa fa-clock-o"></i>
                      </Col>
                    </MyMobile>
                  </Row>
                  <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                      <div className="sub-txt">
                        Prerequisite:
                        <span className="req-txt">
                          {skill.prerequisite.map((req, idx) => {
                            return <span>{` ${req.value} |`}</span>;
                          })}
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="py-4">
                    <Col
                      xl={{ span: 1, offset: 1 }}
                      lg={{ span: 2, offset: 1 }}
                      md={{ span: 2, offset: 1 }}
                      xs={{ span: 3 }}
                    >
                      <div className="subSkill mobile-subskill">Subskills:</div>
                    </Col>
                    {skill.tags.map((det, idx) => {
                      return (
                        <>
                          <Col
                            md={det.value.length >= 10 ? 3 : 2}
                            xl={det.value.length >= 10 ? 3 : 2}
                            xs={12}
                            className="justify-content-center text-center"
                          >
                            <div
                              className={
                                idx % 3 === 0
                                  ? "box-skill-blue mobile-font"
                                  : idx % 2 === 0
                                  ? "box-skill-blueD mobile-font"
                                  : "box-skill-red mobile-font"
                              }
                            >
                              {det.value}
                            </div>
                          </Col>
                        </>
                      );
                    })}
                    <Col md={2} xs={{ span: 3 }}>
                      <div className="addition mobile-add">+7 more</div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default LearnSkill;
