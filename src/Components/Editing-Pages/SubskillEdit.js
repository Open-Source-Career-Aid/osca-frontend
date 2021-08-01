import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import "./Skill.css";
import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { TagsEdit } from '../EditFroms/TagsEdit';
import { PrerequisitesEdit } from '../EditFroms/PrerequisitesEdit';

const SubskillEdit = () => {

    const [isEdit, setIsEdit] = useState(false);
    const [valueEdit, setEditValue] = useState('Hyper-Text Mark');

    let Tagdata = [{ name: 'HTML' }, { name: 'Machine Learning' }, { name: 'HTML' }];

    let preData = [{ name: 'HTML' }, { name: 'Machine Learning' }, { name: 'HTML' }];
    console.log(preData)
    return (
        <div className="spacingTop">
            <Row>
                <Col md={{ span: 1, offset: 2 }} className="text-end">
                    <IconButton>
                        <ArrowBackIcon className="EditBtn" />
                    </IconButton>
                </Col>
                <Col md={6} className="inputExtension">
                    <Row>
                        <Col md={10}>
                            <input
                                type="text"
                                className={!isEdit ? "editLabel" : "editLabel labelEdit"}
                                onChange={(e) => setEditValue(e.target.value)}
                                value={!isEdit ? valueEdit : null}
                            />
                        </Col>
                        <Col md={2} className={`Extension justify-content-center ${isEdit ? "text-center" : "text-end"}`}>
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
                    <PrerequisitesEdit prerequisite_data={preData} />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <TagsEdit tags_data={Tagdata} />
                </Col>
            </Row>
        </div>
    )
}

export default SubskillEdit
