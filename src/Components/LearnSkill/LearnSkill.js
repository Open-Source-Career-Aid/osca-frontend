import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../Styles/Learn.css";
import MyMobile from '../../MyHelperCompnents/MyMobile';
import MyDesktop from '../../MyHelperCompnents/MyDesktop';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";

const LearnSkill = () => {

    // const useStyle = makeStyles({
    //     root: {
    //         color: red,
    //         paddingLeft: "20px",
    //         paddingRight: "20px"
    //     }
    // });

    // const classes = useStyle();

    return (
        <>
            <Container className="SpacingTop">
                <SearchBar />
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
                    <Col md={1} xl={1} xs={{ span: 1 }} >
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
                <Row className="my-5 py-5">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="card-css">
                            <Row className="pt-2">
                                <MyDesktop>
                                    <Col lg={{ span: 6, offset: 1 }} md={{ span: 6, offset: 1 }} >
                                        <div className="card-heading">
                                            <Link className="linkTo" to="/webD">
                                                Web Development
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col md={1} lg={1} className="translate-css">
                                        <div className="skill text-center">
                                            SuperSkill
                                        </div>
                                    </Col>
                                    <Col md={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }} className="text-end">
                                        <div className="track">
                                            Track Your Progress
                                        </div>
                                    </Col>
                                </MyDesktop>
                                <MyMobile>
                                    <Col xs={{ span: 7 }} sm={{ span: 7 }}>
                                        <span>
                                            <div className="card-heading mobile-card">
                                                <Link className="linkTo">
                                                    Web Development
                                                </Link>
                                            </div>
                                        </span>
                                    </Col>
                                    <Col xs={2} className="justify-content-start translate-css text-center">
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
                                    <div className="sub-txt">
                                        Prerequisite:
                                        <span className="req-txt">
                                            HTML | CSS | Javascript | HTML
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="py-4">
                                <Col xl={{ span: 1, offset: 1 }} lg={{ span: 2, offset: 1 }} md={{ span: 2, offset: 1 }} xs={{ span: 3 }}>
                                    <div className="subSkill mobile-subskill">
                                        Subskills:
                                    </div>
                                </Col>
                                <Col md={{ span: 2 }} xl={{ span: 1 }} xs={2}>
                                    <div className="box-skill-blue mobile-font">
                                        HTML
                                    </div>
                                </Col>
                                <Col md={{ span: 2 }} xl={{ span: 1 }} xs={2}>
                                    <div className="box-skill-red mobile-font">
                                        CSS
                                    </div>
                                </Col>
                                <MyDesktop>
                                    <Col md={{ span: 3 }} xl={{ span: 3 }} xs={0}>
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
                            <Row className="pt-3">
                                <MyDesktop>
                                    <Col md={{ span: 3, offset: 1 }}>
                                        <div className="card-heading">
                                            <Link className="linkTo" to="/html">
                                                HTML & CSS
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col md={1} className="translate-css">
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
                                    <Col xs={{ span: 7 }}>
                                        <span>
                                            <div className="card-heading mobile-card">
                                                HTML & CSS
                                            </div>
                                        </span>
                                    </Col>
                                    <Col xs={2} className="translate-css">
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
                                    <div className="sub-txt">
                                        Prerequisite:
                                        <span className="style-txt">
                                            A working internet connection.
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="py-4">
                                <Col md={{ span: 2, offset: 1 }} xl={{ span: 1, offset: 1 }} xs={3}>
                                    <div className="subSkill mobile-subskill">
                                        Subskills:
                                    </div>
                                </Col>
                                <Col md={{ span: 2 }} xl={{ span: 1 }} xs={2}>
                                    <div className="box-skill-blue mobile-font">
                                        HTML
                                    </div>
                                </Col>
                                <Col md={{ span: 2 }} xl={{ span: 1 }} xs={2}>
                                    <div className="box-skill-red mobile-font">
                                        CSS
                                    </div>
                                </Col>
                                <MyDesktop>
                                    <Col md={{ span: 3 }}>
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
                <Row className="my-5 py-5">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="card-css">
                            <Row className="pt-3">
                                <MyDesktop>
                                    <Col md={{ span: 4, offset: 1 }}>
                                        <div className="card-heading">
                                            Machine Learning
                                        </div>
                                    </Col>
                                    <Col md={1} className="translate-css">
                                        <div className="skillRed text-center justify-content-center">
                                            SubSkill
                                        </div>
                                    </Col>
                                    <Col md={{ span: 3, offset: 3 }} className="text-end">
                                        <div className="track">
                                            Track Your Progress
                                        </div>
                                    </Col>
                                </MyDesktop>
                                <MyMobile>
                                    <Col xs={{ span: 7 }}>
                                        <span>
                                            <div className="text-center card-heading mobile-card">
                                                Machine Learning
                                            </div>
                                        </span>
                                    </Col>
                                    <Col xs={2} className="translate-css">
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
                                    <div className="sub-txt">
                                        Prerequisite:
                                        <span className="req-txt">
                                            Python | Ruby
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="py-4">
                                <Col md={{ span: 2, offset: 1 }} xl={{ span: 1, offset: 1 }} xs={3}>
                                    <div className="subSkill mobile-subskill">
                                        Subskills:
                                    </div>
                                </Col>
                                <Col md={{ span: 2 }} xl={{ span: 1 }} xs={2}>
                                    <div className="box-skill-blue mobile-font">
                                        HTML
                                    </div>
                                </Col>
                                <Col md={{ span: 2 }} xl={{ span: 1 }} xs={2}>
                                    <div className="box-skill-red mobile-font">
                                        CSS
                                    </div>
                                </Col>
                                <MyDesktop>
                                    <Col md={{ span: 3 }} xl={{ span: 3 }}>
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
