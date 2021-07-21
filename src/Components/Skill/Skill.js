import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Button, Collapse } from 'react-bootstrap';
import SkillCard from './SkillCard';
import './../../Styles/Skill.css';
import EditButton from './../Buttons/Editbutton';

import Modal from 'react-bootstrap/Modal'

import { TagsEdit } from '../EditFroms/TagsEdit';
import '../../Styles/EditForms/TagsEdit.css'

const roadmap = {
    name: 'Web Devlopment',
    tags: [{ name: 'HTML' }, { name: 'HTML' }, { name: 'HTML' }, { name: 'Machine Learning' }, { name: 'CSS' }],
    preReuqisites: [{ name: 'HTML' }, { name: 'HTML' }, { name: 'HTML' }, { name: 'Machine Learning' }, { name: 'CSS' }],
    skills: [
        {
            name: 'HTML',
            resources: [
                {
                    name: 'Instalation and Setup',
                    links: [
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... '
                    ]
                },
                {
                    name: 'Attributes',
                    links: [
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... '
                    ]
                }
            ]


        },
        {
            name: 'CSS',
            resources: [
                {
                    name: 'Instalation and Setup',
                    links: [
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... '
                    ]
                },
                {
                    name: 'Attributes',
                    links: [
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... '
                    ]
                }
            ]


        }
    ]
}





// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height
//     };
//   }
const leftsrc = './../../leftarrow.png';
const upsrc = './../../up.png';

let srcdict = {};
let opendict = {};

let i = 0;
for (i = 0; i <= roadmap.skills.length; i++) {
    srcdict[i] = leftsrc;
    opendict[i] = false;
}

const Skill = () => {

    const [open, setOpen] = useState(opendict);
    const [src, setSrc] = useState(srcdict);

    const handleChange = (idx) => {
        let values = { ...open };
        values[idx] = !values[idx];
        setOpen({ ...values });
        if (src[idx] === leftsrc) {
            src[idx] = upsrc;
            setSrc({ ...src })
        } else {
            src[idx] = leftsrc;
            setSrc({ ...src })
        }
    }

    const [tags, setTags] = useState(false);

    const handleClose = () => setTags(false);
    const handleShow = () => setTags(true);

    return (
        <div className="headingRow">
            <Col className="backarrow" xs={12} sm={12} md={1} lg={1} xl={1}>
                <img style={styles.backButton} src='./../../back.png' />
            </Col>
            <Col xs={12} sm={12} md={11} lg={11} xl={11}>

                <Row style={styles.fullWidth} >

                    <Col xs={11} sm={11} md={11} lg={11} xl={11} >
                        <h2>{roadmap.name}</h2>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <EditButton />
                    </Col>
                </Row>
                <div className='tagContainer'>
                    <Row>
                        <Col>
                            <h5 >Tags</h5>
                        </Col>
                        <Col xs={1}>
                            <EditButton touch={handleShow} />
                        </Col>
                    </Row>
                    <Row >
                        {roadmap.tags.map((tag, idx) => {
                            return (

                                <Col key={idx} className='colorTags' xs='auto'>
                                    {tag.name}
                                </Col>
                            )
                        })}
                        {/* <Col className='colorTags' xs='auto'>
                     Machine Learning
                 </Col>
                 <Col className='colorTags' xs='auto'>
                     HTML
                 </Col> */}
                    </Row>
                </div>
                <div className='tagContainer'>
                    <Row>
                        <Col>
                            <h5  >Pre-requisites</h5>
                        </Col>
                        <Col xs={1}>
                            <EditButton />
                        </Col>
                    </Row>
                    <Row >
                        {roadmap.preReuqisites.map((preReuqisite, idx) => {
                            return (

                                <Col className='tags' xs='auto'>
                                    {preReuqisite.name}
                                </Col>
                            )
                        })}
                        {/* <Col className='tags' xs='auto'>
                     HTML
                 </Col>
                 <Col className='tags' xs='auto'>
                     HTML
                 </Col> */}
                    </Row>
                </div>
                <div className='skillContainer'>
                    {roadmap.skills.map((skill, idx) => {

                        return (
                            <>
                                <Row style={styles.fullWidth} className='align-items-center'  >
                                    <Col xs={11} sm={11} md={11} lg={11} xl={11} >
                                        <h3 className='skillName'>{skill.name}</h3>
                                    </Col>
                                    <Col xs={1} sm={1} md={1} lg={1} xl={1} >
                                        <Button
                                            style={styles.btn}

                                            onClick={() => handleChange(idx)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}>
                                            <img style={open[idx] ? styles.dropButton : styles.leftbutton} src={src[idx]} />
                                        </Button>
                                    </Col>
                                </Row>
                                <Collapse in={open[idx]}>
                                    <div id="example-collapse-text">

                                        <SkillCard props={skill.resources} />
                                    </div>
                                </Collapse>
                            </>

                        )
                    })}
                </div>
            </Col>
            <Modal centered show={tags} onHide={handleClose}>
                <Modal.Header>
                    <button type="button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM11 14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15C9.73479 15 9.48043 14.8946 9.2929 14.7071C9.10536 14.5196 9 14.2652 9 14V9C9 8.73478 9.10536 8.48043 9.2929 8.29289C9.48043 8.10536 9.73479 8 10 8C10.2652 8 10.5196 8.10536 10.7071 8.29289C10.8946 8.48043 11 8.73478 11 9V14ZM10 7C9.80222 7 9.60888 6.94135 9.44443 6.83147C9.27999 6.72159 9.15181 6.56541 9.07613 6.38268C9.00044 6.19996 8.98063 5.99889 9.01922 5.80491C9.05781 5.61093 9.15305 5.43275 9.2929 5.29289C9.43275 5.15304 9.61093 5.0578 9.80491 5.01921C9.9989 4.98063 10.2 5.00043 10.3827 5.07612C10.5654 5.15181 10.7216 5.27998 10.8315 5.44443C10.9414 5.60888 11 5.80222 11 6C11 6.26522 10.8946 6.51957 10.7071 6.70711C10.5196 6.89464 10.2652 7 10 7Z" fill="#586060" />
                        </svg>
                    </button>
                    <Modal.Title>Suggest an Edit</Modal.Title>
                    <button type="button" onClick={handleClose}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.37857 6.37857L11.7571 11.7571M1 11.7571L6.37857 6.37857L1 11.7571ZM11.7571 1L6.37754 6.37857L11.7571 1ZM6.37754 6.37857L1 1L6.37754 6.37857Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <TagsEdit onSubmit={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}


const styles = {
    btn: {
        backgroundColor: 'white',
        border: 'none',
    },
    leftbutton: {
        height: '.8em',
        width: '.9em',
    },
    dropButton: {
        height: '.6em',
        width: '1em'
    },
    backButton: {
        marginTop: '.3em',
        height: '1.2em',
        width: '1.5em',

    },
    fullWidth: {
        width: '100%'
    }
}

export default Skill;