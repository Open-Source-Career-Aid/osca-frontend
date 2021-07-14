import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Button, InputGroup, FormControl}  from 'react-bootstrap';
// import FormControlLabel from '@material-ui/core/FormControlLabel';


import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Deletebutton from '../Buttons/Deletebutton';
import Editbutton from '../Buttons/Editbutton';
import './SkillRoadmap.css';
import { border, borderColor } from '@material-ui/system';
import OkButton from './../Buttons/OkButton';

const SkillRoadmap = () => {

    const [skills, setSkills] = useState([{name:null}]);

    const [editSkill, setEditSkill] = useState({'0': 1, });

    //handles the addition of skills
    const handleAddButton = () => {
        let values = [...skills];
        values.push({name: null});
        let indexoflastelement = values.length;
        editSkill[indexoflastelement -1 ] = 1;
    
        setEditSkill({...editSkill});
        setSkills([...values]);
    }

    // Handles the editing of Skill name

    const handleEditButton = (idx) => {
        let values = {...editSkill};
        values[idx] = !values[idx];
        setEditSkill({...values});
    }

    //handles the ok button
    const handleOkButton = (idx) => {
        if(skills[idx].name === '' || skills[idx].name === null ) {
            alert('cannot be empty');
            return;
        }
        handleEditButton(idx);
    }

    // handles the change in name of skill
    const handleChangeSkill = (e, idx) => {
        let values = [...skills];
        console.log(values);
        values[idx].name = e.target.value;
        setSkills([...values]);
    }

    // handles the deletion of the skill
    const handleDeleteButton = ( idx) => {
        let values = [...skills];
        values.splice(idx, 1);
        setSkills([...values]);
    }

    return (
        <div className='SkillRoadmap'>
            <Row >
                <Col >
                    <h3>Skills</h3>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={2}>
                    <Button onClick={e => handleAddButton(e)} style={styles.btn} >
                        Add a skill    
                    </Button>
                </Col>
            </Row>
            {/* for loops for skills */}
            <div className='R-1'>
                {skills.map((skill, idx) => {
                    return(
                        <Row className='align-items-center skill' >
                            <Col>
                                {editSkill[idx]
                                ?
                                    <InputGroup style={styles.input} className="mb-3 ">
                                    <FormControl
                                    required
                                    value={skill.name}
                                    onChange={e => handleChangeSkill(e, idx)}
                                    placeholder={"Name of the Topic"}
                                    aria-label="Name of the Topic"
                                    aria-describedby="basic-addon2"
                                    className ="inputresource"
                                    />
                                    </InputGroup>
                                :
                                <h4>{skill.name}</h4>
                            }
                            </Col>
                            <Col xs={1} sm={1} md={1} lg={1} xl={1} >
                                {editSkill[idx]
                                ?
                                <OkButton index={idx} fun={handleOkButton} />
                                :
                                <Editbutton index={idx} fun={handleEditButton} />
                                }
                            </Col>
                            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                <Deletebutton index={idx} fun={handleDeleteButton}  />
                            </Col>
                        </Row>
                    )
                })}               
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
    },
    input: {
        marginTop: '.6em',
        
    }
}

export default SkillRoadmap;