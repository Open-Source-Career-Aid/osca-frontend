import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import "./SkillEdit.css";
import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { TagsEdit } from '../EditFroms/TagsEdit';
import { PrerequisitesEdit } from '../EditFroms/PrerequisitesEdit';
import { SuperSkillEdit } from '../EditFroms/SuperSkillEdit';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SkillEdit = (props) => {
    // console.log(props, "hey ")
    let edit_data = props.location.state.skilldata;
    const [isEdit, setIsEdit] = useState(false);
    const [valueEdit, setEditValue] = useState(edit_data.name);
    const history = useHistory();
    
    const handleSubmit = () => {

    }

    return (
        <div className="spacingTop">
            <Row>
                <Col xs={{ span: 1, offset: 0 }} md={{ span: 1, offset: 2 }} className="text-end">
                    <IconButton onClick={() => history.goBack()} >
                        <ArrowBackIcon className="EditBtn" />
                    </IconButton>
                </Col>
                <Col md={6} className="inputExtension">
                    <Row>
                        <Col xs={8}  md={10}>
                            <input
                                type="text"
                                className={!isEdit ? "editLabel" : "editLabel labelEdit"}
                                onChange={(e) => setEditValue(e.target.value)}
                                value={!isEdit ? valueEdit : null}
                            />
                        </Col>
                        <Col xs={4} md={2} className={`Extension justify-content-center ${isEdit ? "text-center" : "text-end"}`}>
                            {isEdit ? (
                                <>
                                    <IconButton>
                                        <CheckIcon className="EditBtn" onClick={() => setIsEdit(!isEdit)} />
                                    </IconButton>
                                    <IconButton onClick={() => setIsEdit(!isEdit)}>
                                        <ClearIcon className="EditBtn" />
                                    </IconButton>
                                </>) :
                                <IconButton onClick={() => setIsEdit(!isEdit)}>
                                    <EditIcon className="EditBtn" />
                                </IconButton>}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <PrerequisitesEdit prerequisite_data={edit_data.prerequisites} />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <TagsEdit tags_data={edit_data.tags} />
                </Col>
            </Row>
            <Row className="pt-4">
                <Col md={{ span: 6, offset: 3 }}>
                    <SuperSkillEdit roadmap_skills={edit_data.sub_skills}  />
                </Col>
            </Row>
            <Row  xs='auto'  className=" submit_button justify-content-end text-end ">
            
                    <Button onClick={e => handleSubmit(e)} style={styles.submitButton} type='submit'>
                        Submit
                    </Button>
            </Row>
        </div>
    )
}

const styles = {
    submitButton: {
        backgroundColor: '#8750A9',
        fontWeight: '700',
        marginTop: '2em',
        borderRadius: '.5em',
        border: 'none',
        fontSize: '1.2em'
    }
}

export default SkillEdit
