import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "../../Styles/Content.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const Content = () => {
    return (
        <div className="">
            <Row>
                <Col md={1} className="text-end">
                    <IconButton>
                        <ArrowBackIcon className="Icon" />
                    </IconButton>
                </Col>
                <Col md={6} className="heading text-start">
                    Web Development
                </Col>
                <Col md={2} className="Edit text-end">
                    Suggest an edit
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 7, offset: 1 }} className="SubHeading">
                    Tags
                </Col>
                <Col md={1}>
                    <IconButton>
                        <EditIcon className="Icon" />
                    </IconButton>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 7, offset: 1 }}>
                    <span md={{ offset: 1, span: 1 }} className="box-skill-blue">
                        HTML
                    </span>
                    <span className="box-skill-red">
                        CSS
                    </span>
                    <span className="box-skill-blueD">
                        MachineLearning
                    </span>
                    <span md={{ offset: 1, span: 1 }} className="box-skill-blue">
                        HTML
                    </span>
                    <span className="box-skill-red">
                        CSS
                    </span>
                    <span className="box-skill-blueD">
                        MachineLearning
                    </span>
                    <span md={{ offset: 1, span: 1 }} className="box-skill-blue">
                        HTML
                    </span>
                    <span className="box-skill-red">
                        CSS
                    </span>
                    <span className="box-skill-blueD">
                        MachineLearning
                    </span>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col md={{ offset: 1, span: 7 }} className="SubHeading">
                    Pre-requisites
                </Col>
                <Col md={1}>
                    <IconButton>
                        <EditIcon className="Icon" />
                    </IconButton>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 7, offset: 1 }}>
                    <span className="box">
                        HTML
                    </span>
                    <span className="box">
                        CSS
                    </span>
                    <span className="box">
                        Machine Learning
                    </span>
                    <span className="box">
                        HTML
                    </span>
                    <span className="box">
                        CSS
                    </span>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 7, offset: 1 }} className="heading pt-3 font">
                    HTML
                </Col>
                <Col md={1} className="text-end justify-content-end">
                    <IconButton>
                        <ArrowBackIosIcon className="ArrowDown" />
                    </IconButton>
                </Col>
            </Row>
            <Row className="py-4">
                <Col md={{ span: 8, offset: 1 }} className="backDrop">
                    <div className="heading-txt">
                        Installation and Setup
                    </div>
                    <div className="backDrop-1">
                        <Row>
                            <Col md={11} className="Link-txt">
                                Exp-1
                            </Col>
                            <Col md={1}>
                                <IconButton>
                                    <FileCopyIcon className="CopyIcon" />
                                </IconButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={11} className="Link-txt">
                                Exp-1
                            </Col>
                            <Col md={1}>
                                <IconButton>
                                    <FileCopyIcon className="CopyIcon" />
                                </IconButton>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 1 }} className="backDrop">
                    <div className="heading-txt">
                        Attributes
                    </div>
                    <div className="backDrop-1">
                        <Row>
                            <Col md={11} className="Link-txt">
                                Exp-1
                            </Col>
                            <Col md={1}>
                                <IconButton>
                                    <FileCopyIcon className="CopyIcon" />
                                </IconButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={11} className="Link-txt">
                                Exp-1
                            </Col>
                            <Col md={1}>
                                <IconButton>
                                    <FileCopyIcon className="CopyIcon" />
                                </IconButton>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Content
