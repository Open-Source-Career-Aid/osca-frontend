import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import "../Styles/Learn.css";
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

const LearnSkill = () => {

    const useStyle = makeStyles({
        root:{
            color:red,
            paddingLeft:"20px",
            paddingRight:"20px"
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
                                    <SearchIcon className={classes.root}/>
                                </IconButton>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LearnSkill
