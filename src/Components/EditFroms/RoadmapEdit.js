import React from 'react'
import { Row, Col } from 'react-bootstrap'
import style from "../../Styles/EditForms/RoadMapSkill.module.css"
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import Drag from "../../Images/Drag.png";
import { useState } from 'react';
import Delete from "../../Images/Delete.png";
import AddIcon from '@material-ui/icons/Add';

const RoadmapEdit = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [links, setLinks] = useState('');
    const [resourses, setResourses] = useState([
        {
            name: 'Full HTML Lecture PlayList',
            links: [
                'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
            ]
        },
    ])

    // let resourses = 

    const handleAdd = (idx) => {
        const values = resourses[idx];
        values.links.push(links);
        console.log(values)
        setResourses([values]);
    }

    return (
        <>
            <Row className={style.head}>
                RoadMap
            </Row>
            {/* <hr /> */}
            {
                resourses.map((res, idx) => {
                    return (
                        <>
                            <Row className={`my-1 ${style.backDrop}`}>
                                <Col md={{ span: 10 }} className={style.headLine}>
                                    {res.name}
                                </Col>
                                <Col md={2} className={`text-end`}>
                                    <IconButton>
                                        <EditIcon className={style.Icon} />
                                    </IconButton>
                                </Col>
                                {res.links.map((data) => {
                                    return (
                                        <>
                                            <Row className="pt-2">
                                                <Col md={1} className="my-1">
                                                    <img src={Drag} alt="" />
                                                </Col>
                                                <Col md={11} className={style.links}>
                                                    <Row>
                                                        <Col md={11}>
                                                            <input type="text" className={style.inputF} value={data} />
                                                        </Col>
                                                        <Col md={1} className="justify-content-center text-center">
                                                            <img src={Delete} alt="" />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </>
                                    )
                                })}
                                <Row>
                                    <Col md={{ span: 11, offset: 1 }}>
                                        <hr className={style.Rule} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ span: 11, offset: 1 }} className={style.links}>
                                        <Row>
                                            <Col md={11}>
                                                <input type="text" className={`${style.inputF} ${style.inputE}`} placeholder="Place the resourse link here." onChange={(e) => setLinks(e.target.value)} />
                                            </Col>
                                            <Col md={1} className="text-center justify-content-center">
                                                <IconButton className={`${style.trans}`} onClick={() => handleAdd(idx)}>
                                                    <AddIcon className={`${style.Icon}`} />
                                                </IconButton>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Row>
                        </>
                    )
                })
            }
        </>
    )
}

export default RoadmapEdit
