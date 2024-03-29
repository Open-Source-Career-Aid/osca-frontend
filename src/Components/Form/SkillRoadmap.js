import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Deletebutton from '../Buttons/Deletebutton';
import Editbutton from '../Buttons/Editbutton';
import './SkillRoadmap.css';
import OkButton from './../Buttons/OkButton';

const SkillRoadmap = (props) => {


    const [data, setData] = useState();

    const [skills, setSkills] = useState([{ skillName: null }]);
    const [title, setTitle] = useState('');

    const [titleEdit, setTitleEdit] = useState(0);

    const [editSkill, setEditSkill] = useState({ '0': 1, });

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleEditButtonTitle = () => {
        setTitleEdit(!titleEdit);
    }

    //handles ok button in title
    const handleOkButtonTitle = () => {
        if (title === '' || title === null) {
            alert('cannot be empty');
            return;
        }
        setTitleEdit(!titleEdit);
    }

    //handles the addition of skills
    const handleAddButton = () => {
        let values = [...skills];
        values.push({ skillName: null });
        let indexoflastelement = values.length;
        editSkill[indexoflastelement - 1] = 1;

        setEditSkill({ ...editSkill });
        setSkills([...values]);
    }

    // Handles the editing of Skill name

    const handleEditButton = (idx) => {
        let values = { ...editSkill };
        values[idx] = !values[idx];
        setEditSkill({ ...values });
    }

    //handles the ok button
    const handleOkButton = (idx) => {
        if (skills[idx].skillName === '' || skills[idx].skillName === null) {
            alert('cannot be empty');
            return;
        }
        handleEditButton(idx);
    }

    // handles the change in name of skill
    const handleChangeSkill = (e, idx) => {
        let values = [...skills];
        values[idx].skillName = e.target.value;
        setSkills([...values]);
    }

    // handles the deletion of the skill
    const handleDeleteButton = (idx) => {
        let values = [...skills];
        values.splice(idx, 1);
        setSkills([...values]);
    }

    // handles the change in component 

    const handleChangeInData = () => {
        let roadmapName = title;
        let values = {
            skills,
            roadmapName
        }
        setData({ ...values });
        props.onChange(data);
    }


    return (
        <div onChange={() => handleChangeInData()} className='SkillRoadmap'>
            <Row >
                <Col >
                    <h3>Skills</h3>
                </Col>

            </Row>
            <Row className='title '>
                <Col>
                    {titleEdit ?
                        <h2>{title}</h2>
                        :
                        <InputGroup style={styles.input} className="mb-4 ">
                            <FormControl
                                required
                                value={title}
                                onChange={e => handleChangeTitle(e)}
                                placeholder={"Roadmap Title"}
                                aria-label="Name of the Topic"
                                aria-describedby="basic-addon2"
                                className="inputresource"
                            />
                        </InputGroup>
                    }
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                    {titleEdit
                        ?
                        <Editbutton fun={handleEditButtonTitle} />
                        :
                        <OkButton fun={handleOkButtonTitle} />
                    }
                </Col>
            </Row>
            {/* for loops for skills */}
            <div className='R-1'>
                {skills.map((skill, idx) => {
                    return (
                        <Row className='align-items-center skills' >
                            <Col>
                                {editSkill[idx]
                                    ?
                                    <InputGroup style={styles.input} className="mb-3 ">
                                        <FormControl
                                            required
                                            value={skill.skillName}
                                            onChange={e => handleChangeSkill(e, idx)}
                                            placeholder={"Name of the Topic"}
                                            aria-label="Name of the Topic"
                                            aria-describedby="basic-addon2"
                                            className="inputresource"
                                        />
                                    </InputGroup>
                                    :
                                    <h4>{skill.skillName}</h4>
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
                                <Deletebutton index={idx} fun={handleDeleteButton} />
                            </Col>
                        </Row>
                    )
                })}
                <Row xs='auto' className='justify-content-center'>
                    <Button onClick={e => handleAddButton(e)} style={styles.btn} >
                        Add a skill
                    </Button>
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
        fontSize: '.91em',
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
        paddingTop: '.4em',
        paddingBottom: '.4em',
        fontWeight: '600'
    },
    input: {
        marginTop: '.6em',
    }
}

export default SkillRoadmap;
