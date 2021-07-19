import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import "../../Styles/Learn.css";
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import MyMobile from "../../MyHelperCompnents/MyMobile";
import MyDesktop from "../../MyHelperCompnents/MyDesktop";

const LearnSkill = () => {

    const useStyle = makeStyles({
        root: {
            color: red,
            paddingLeft: "20px",
            paddingRight: "20px"
        }
    });

    const classes = useStyle;

    return (
        <>
            <Container>
                <Row className="top-pad">
                    <MyDesktop>
                        <Col className="learn-txt center" md={{ span: 1, offset: 2 }}>
                            Skillset
                        </Col>
                    </MyDesktop>
                    <Col md={{ span: 3, offset: 4 }} xs={{ span: 8, offset: 2 }} >
                        <InputGroup className="SearchField">
                            <Form.Control
                                type="text"
                                className="Search text-center"
                                placeholder="Search a Skill"
                            />
                            <InputGroup.Append className="search-btn">
                                <IconButton aria-label="Search" size="small">
                                    <SearchIcon className={classes.root} />
                                </IconButton>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pt-3">
                    <Col md={{ offset: 7, span: 1 }} xs={{ span: 3, offset: 3 }}>
                        <div className="skillset justify-content-center">
                            Superskill
                        </div>
                    </Col>
                    <Col md={1} xs={{ span: 2, offset: 1 }}>
                        <div className="skillset active justify-content-start">
                            Subskills
                        </div>
                    </Col>
                </Row>
                <MyMobile>
                    <Row>
                        <Container className="learn-txt">
                            Skillset
                        </Container>
                    </Row>
                </MyMobile>
                <Row className="my-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="card-css">
                            <Row className="pt-2">
                                <MyDesktop>
                                    <Col md={{ span: 4, offset: 1 }}>
                                        <div className="card-heading">
                                            Web Development
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="skill text-center">
                                            SuperSkill
                                        </div>
                                    </Col>
                                    <Col md={{ span: 3, offset: 3 }} className="text-end">
                                        <div className="track">
                                            Track Your Progress
                                        </div>
                                    </Col>
                                </MyDesktop>
                                <MyMobile>
                                    <Col xs={{ span: 6, offset: 1 }}>
                                        <span>
                                            <div className="card-heading mobile-card">
                                                Web Development
                                            </div>
                                        </span>
                                    </Col>
                                    <Col xs={2}>
                                        <div className="skill text-center">
                                            SuperSkill
                                        </div>
                                    </Col>
                                    <Col xs={3} className="text-end icon-time">
                                        <i class="fa fa-clock-o"></i>
                                    </Col>
                                </MyMobile>
                            </Row>
                            <Row>
                                <Col md={{ span: 10, offset: 1 }}>
                                    <Container>
                                        <div className="content mobile-content pt-2">
                                            This contains a detailed guide to be a full stack developer in most effecient way. It includes all the required resources and work plan which is easy to follow.
                                        </div>
                                    </Container>
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col md={{ span: 1, offset: 1 }} xs={{ span: 3 }}>
                                    <div className="subSkill mobile-subskill">
                                        Subskills:
                                    </div>
                                </Col>
                                <Col md={{ span: 1 }} xs={2}>
                                    <div className="box-skill-blue mobile-font">
                                        HTML
                                    </div>
                                </Col>
                                <Col md={{ span: 1 }} xs={2}>
                                    <div className="box-skill-red mobile-font">
                                        CSS
                                    </div>
                                </Col>
                                <MyDesktop>
                                    <Col md={{ span: 2 }} xs={0}>
                                        <div className="box-skill-blueD">
                                            Machine Learning
                                        </div>
                                    </Col>
                                </MyDesktop>
                                <Col md={2} xs={{ span: 3 }}>
                                    <div className="addition mobile-add">
                                        +7 more
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="card-css">
                            <Row className="py-2">
                                <MyDesktop>
                                    <Col md={{ span: 3, offset: 1 }}>
                                        <div className="card-heading">
                                            HTML & CSS
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="skillRed text-center justify-content-center">
                                            SubSkill
                                        </div>
                                    </Col>
                                    <Col md={{ span: 3, offset: 4 }} className="text-end">
                                        <div className="track">
                                            Track Your Progress
                                        </div>
                                    </Col>
                                </MyDesktop>
                                <MyMobile>
                                    <Col xs={{ span: 6, offset: 1 }}>
                                        <span>
                                            <div className="card-heading mobile-card">
                                                HTML & CSS
                                            </div>
                                        </span>
                                    </Col>
                                    <Col xs={2}>
                                        <div className="skillRed justify-content-center text-center">
                                            SubSkill
                                        </div>
                                    </Col>
                                    <Col xs={3} className="text-end icon-time">
                                        <i class="fa fa-clock-o"></i>
                                    </Col>
                                </MyMobile>
                            </Row>
                            <Row>
                                <Col md={{ span: 10, offset: 1 }}>
                                    <Container>
                                        <div className="content pt-2">
                                            This contains a detailed guide to be a full stack developer in most effecient way. It includes all the required resources and work plan which is easy to follow.
                                        </div>
                                    </Container>
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col md={{ span: 1, offset: 1 }} xs={3}>
                                    <div className="subSkill mobile-subskill">
                                        Subskills:
                                    </div>
                                </Col>
                                <Col md={{ span: 1 }} xs={2}>
                                    <div className="box-skill-blue mobile-font">
                                        HTML
                                    </div>
                                </Col>
                                <Col md={{ span: 1 }} xs={2}>
                                    <div className="box-skill-red mobile-font">
                                        CSS
                                    </div>
                                </Col>
                                <MyDesktop>
                                    <Col md={{ span: 2 }}>
                                        <div className="box-skill-blueD">
                                            Machine Learning
                                        </div>
                                    </Col>
                                </MyDesktop>
                                <Col md={2} xs={3}>
                                    <div className="addition mobile-add">
                                        +7 more
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LearnSkill
