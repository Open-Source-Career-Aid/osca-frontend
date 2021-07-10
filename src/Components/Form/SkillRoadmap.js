import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Button}  from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Deletebutton from '../Buttons/Deletebutton';
import Editbutton from '../Buttons/Editbutton';
import './SkillRoadmap.css';
import { border, borderColor } from '@material-ui/system';

const SkillRoadmap = () => {

    return (
        <div className='SkillRoadmap'>
            <Row >
                <Col >
                    <h3>Skills</h3>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={2}>
                    <Button style={styles.btn} >
                        Add a skill    
                    </Button>
                </Col>
            </Row>
            {/* for loops for skills */}
            <div className='R-1'>
                <Row className='align-items-center skill' >
                    <Col>
                        <h4> HTML</h4>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1} >
                        <Editbutton/>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Deletebutton/>
                    </Col>
                </Row>
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

export default SkillRoadmap;