import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import "../Styles/Learn.css";
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

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
            <Container className="top-pad">
                <Row>
                    <Col className="learn-txt center" md={{ span: 1, offset: 2 }}>
                        Skillset
                    </Col>
                    <Col md={{ span: 3, offset: 4 }}>
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
                    <Col md={{ offset: 8, span: 1 }}>
                        <div className="skillset">
                            Superskill
                        </div>
                    </Col>
                    <Col md={{ span: 1 }}>
                        <div className="skillset active">
                            Subskills
                        </div>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="card-css">
                            <Row className="pt-2">
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
                                <Col md={{ span: 1, offset: 1 }}>
                                    <div className="subSkill">
                                        Subskills:
                                    </div>
                                </Col>
                                <Col md={{ span: 1 }}>
                                    <div className="box-skill-blue">
                                        HTML
                                    </div>
                                </Col>
                                <Col md={{ span: 1 }}>
                                    <div className="box-skill-red">
                                        CSS
                                    </div>
                                </Col>
                                <Col md={{ span: 2 }}>
                                    <div className="box-skill-blueD">
                                        Machine Learning
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="card-css">
                            <Row className="pt-2">
                                <Col md={{ span: 4, offset: 1 }}>
                                    <div className="card-heading">
                                        HTML & CSS
                                    </div>
                                </Col>
                                <Col md={1}>
                                    <div className="skillRed text-center">
                                        SubSkill
                                    </div>
                                </Col>
                                <Col md={{ span: 3, offset: 3 }} className="text-end">
                                    <div className="track">
                                        Track Your Progress
                                    </div>
                                </Col>
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
                                <Col md={{ span: 1, offset: 1 }}>
                                    <div className="subSkill">
                                        Subskills:
                                    </div>
                                </Col>
                                <Col md={{ span: 1 }}>
                                    <div className="box-skill-blue">
                                        HTML
                                    </div>
                                </Col>
                                <Col md={{ span: 1 }}>
                                    <div className="box-skill-red">
                                        CSS
                                    </div>
                                </Col>
                                <Col md={{ span: 2 }}>
                                    <div className="box-skill-blueD">
                                        Machine Learning
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
