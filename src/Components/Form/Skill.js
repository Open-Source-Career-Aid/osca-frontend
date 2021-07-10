import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Button, InputGroup, FormControl}  from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Deletebutton from '../Buttons/Deletebutton';
import Editbutton from '../Buttons/Editbutton';
import './Skill.css';
import Addbutton from '../Buttons/AddButton';

const Skill = () => {

    return (
        <div className='Skill'>
            <Row className='title'>
                <Col>
                    <h2>Title</h2>
                </Col>
                <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                    <Editbutton/>
                </Col>
            </Row>
            <div className='container'>

            <Row >
                <Col >
                    <h3>Attributes</h3>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                    <Editbutton shape='rounded' color='#FFFFFF'  />
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                    <Deletebutton/>
                </Col>
            </Row>
           <div className='resourcelinks'>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                {/* <Button variant="outline-secondary" id="button-addon2">
                    +
                </Button> */}
                <Addbutton/>
                </InputGroup>
                <Row>
                    <Col>
                        <h5>https://websitesetup.org/bootstrap-tutorial-for-beginners/</h5>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1} >
                        <Deletebutton/>
                    </Col>
                </Row>
           </div>
            </div>
        </div>
    )

};

const styles = {
    btn: {
        backgroundColor: 'transparent',
        borderColor: '#989898',
        borderRadius: '2em',
        color: '#989898',
        fontSize: '.81em',
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
        paddingTop: '.4em',
        paddingBottom: '.4em',
    }
}

export default Skill;