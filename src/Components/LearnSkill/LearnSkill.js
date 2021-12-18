import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Styles/Learn.css";
import MyMobile from "../../MyHelperCompnents/MyMobile";
import MyDesktop from "../../MyHelperCompnents/MyDesktop";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { useLoading } from "../../hooks/useLoading"
import { Loader } from '../Loader/Loader';
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const LearnSkill = () => {
  const [skills, setSkills] = useState([]);

  const handleSearch = (data) => {
    data
      .then((res) => {
        const set = res.map((details) => {
          return {
            id: details.id,
            name: details.skill || details.name,
            skill: details.is_superskill ? "SuperSkill" : "SubSkill",
            prerequisite: [{ value: "" }],
            tags: details.tags.map((det) => {
              return { value: det.tagName };
            }),
          };
        });
        //  set.sort(function(a, b){
        //   return a.skill - b.skill;
        // });
        set.sort((a, b) => (a.skill === "SuperSkill" ? -1 : 1));
        set.reverse();
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
  console.log(skills);

  const { loading } = useLoading("http://osca-api.herokuapp.com/form/learn-skill/?searchData=");

  return loading ? (
    <Loader message="Loading! please wait...." />
  ) : (
    <>
      <Container className="SpacingTop">
        <div className="siderow">
        <p>
            <a href="https://forms.gle/QQc18eT3VCWb1iGh8">Contribute a Roadmap</a>
        </p>
        <p>
          <a href="https://forms.gle/Sp3fnDYbbPCxpyrUA">Request a Roadmap</a>
        </p> 

        </div>
        <SearchBar handleSearch={handleSearch} />

        {/*<MyMobile>
          <Row>
            <Container className="learn-txt">Skillset</Container>
          </Row>
        </MyMobile>*/}
      </Container>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          minHeight: "66.5vh"
        }}
      >
        {skills.map((skill, idx) => {
          return (
            <div className="skillCard">
              {
                skill.skill === "SuperSkill" ?
                  <Link className="linkTo" to={`/skill/${skill.id}`}>
                    <div className="cardHeader">
                      <h1>
                        {skill.name}
                        <span
                          style={{
                            backgroundColor: `${skill.skill === "SubSkill" ? "#E85050" : "#28B5E1"
                              }`,
                          }}
                        >
                          {skill.skill}
                        </span>
                      </h1>
                      <div className="trackIcon">
                        <AiOutlineClockCircle
                          style={{ fill: "#36CF45", width: 24, height: 24 }}
                        />
                      </div>
                      <div className="track">Track Your progress</div>
                    </div>
                    <div className="cardBody">
                      This contains a detailed guide to how to be a full stack web
                      developer in most efficient way. It includes all the required
                      resources and a work plan which is easy to follow.
                      isjdfiasdjfisjfJI jiasdf Ij ijdfi ajfl. kjsadifj Great!
                    </div>
                    <div className="cardFooter">
                      Tags:
                      {skill.tags.map((data, index) => {
                        return (
                          <span
                            style={{
                              backgroundColor: `${index % 3 === 0
                                ? "#2C91B0"
                                : index % 2 === 0
                                  ? "#4248D2"
                                  : "#D74646"
                                }`,
                            }}
                            key={index}
                          >
                            {data.value}
                          </span>
                        );
                      })}
                    </div>
                  </Link>
                  :
                  <Link className="linkTo" to={`/subskill/${skill.id}`}>
                    <div className="cardHeader">
                      <h1>
                        {skill.name}
                        <span
                          style={{
                            backgroundColor: `${skill.skill === "SubSkill" ? "#E85050" : "#28B5E1"
                              }`,
                          }}
                        >
                          {skill.skill}
                        </span>
                      </h1>
                      {/*<div className="trackIcon">
                        <AiOutlineClockCircle
                          style={{ fill: "#36CF45", width: 24, height: 24 }}
                        />
                      </div>
                        <div className="track">Track Your progress</div>*/}
                    </div>
                    <div className="cardBody">
                      This contains a detailed guide to how to be a full stack web
                      developer in most efficient way. It includes all the required
                      resources and a work plan which is easy to follow.
                      isjdfiasdjfisjfJI jiasdf Ij ijdfi ajfl. kjsadifj Great!
                    </div>
                    <div className="cardFooter">
                      Tags:
                      {skill.tags.map((data, index) => {
                        return (
                          <span
                            style={{
                              backgroundColor: `${index % 3 === 0
                                ? "#2C91B0"
                                : index % 2 === 0
                                  ? "#4248D2"
                                  : "#D74646"
                                }`,
                            }}
                            key={index}
                          >
                            {data.value}
                          </span>
                        );
                      })}
                    </div>
                  </Link>
              }
            </div>
          );
        })}
      </div>
      <MyMobile>
        <div style={{ marginBottom: 130, display: "" }}></div>
      </MyMobile>
    </>
  );
};

export default LearnSkill;
