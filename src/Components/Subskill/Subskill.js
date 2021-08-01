import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import SkillCard from './../Skill/SkillCard';
import './../../Styles/Skill.css';
import EditButton from '../Buttons/Editbutton';
import { Link } from "react-router-dom"

const roadmap = {
    name: 'HTML',
    tags: [{ name: 'HTML' }, { name: 'HTML' }, { name: 'HTML' }, { name: 'Machine Learning' }, { name: 'CSS' }],
    preReuqisites: [{ name: 'HTML' }, { name: 'HTML' }, { name: 'HTML' }, { name: 'Machine Learning' }, { name: 'CSS' }],

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


const Subskill = () => {


    const [editMode, setEditMode] = useState(0);

    const handleEditMode = () => {
        setEditMode(!editMode);
    }


    return (
        <div className="headingRow">
            <Col className="backarrow" xs={12} sm={12} md={1} lg={1} xl={1}>
                <img style={styles.backButton} src='./../../back.png' />
            </Col>
            <Col xs={12} sm={12} md={11} lg={11} xl={11}>

                <Row style={styles.fullWidth} >

                    <Col xs='auto' >
                        <h2>{roadmap.name}</h2>
                    </Col>
                    <Col xs='auto' >
                        <Link to="/htmledit">
                            <h6 style={styles.suggestEdit}>Suggest an edit</h6>
                        </Link>
                    </Col>
                </Row>
                <div className='tagContainer'>
                    <Row>
                        <Col>
                            <h5 >Tags</h5>
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
                    </Row>
                </div>
                <div className='tagContainer'>
                    <Row >
                        <Col>
                            <h5  >Pre-requisites</h5>
                        </Col>
                    </Row>
                    <Row  >
                        {roadmap.preReuqisites.map((preReuqisite, idx) => {
                            return (

                                <Col className='skilltags' xs='auto'>
                                    {preReuqisite.name}
                                </Col>
                            )
                        })}

                    </Row>
                </div>
                <div style={{ paddingLeft: '.6em' }}>
                    <h3>Roadmap</h3>
                    <SkillCard editMode={editMode} props={roadmap.resources} />
                </div>
            </Col>
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
        marginTop: '.1em',
        height: '1.4em',
        width: '1.6em',

    },
    fullWidth: {
        width: '100%',
        justifyContent: 'space-between',
    },
    suggestEdit: {
        color: '#8750A9',
        fontWeight: '600',
        textDecorationLine: 'underline',

    },

}

export default Subskill;