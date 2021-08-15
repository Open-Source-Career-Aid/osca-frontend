import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import SkillCard from './../Skill/SkillCard';
import './../../Styles/Skill.css';
import EditButton from '../Buttons/Editbutton';
import { Link } from "react-router-dom"

const Roadmap = {
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

const  getList =(skillId) =>{
    return fetch('http://osca-api.herokuapp.com/form/get-skill/?id=' + '1')
      .then(data => data.json())
  }

const Subskill = (props) => {

    console.log(props);
    const [editMode, setEditMode] = useState(0);

    const handleEditMode = () => {
        setEditMode(!editMode);
    }

    const [subskilldata, setSubskilldata] = useState(null);

    useEffect(() => {
        let mounted = true;
        getList()
          .then(items => {
            if(mounted) {
                console.log(items, 'mayank', items.skill);
                setSubskilldata({...items});
            }
          })
        return () => mounted = false;
      }, [])

    return (
        <>
        {subskilldata === null ?
            <h4> loading...</h4>
            :
            <>
            <div className="headingRow">
            <Col className="backarrow" xs={12} sm={12} md={1} lg={1} xl={1}>
                <img style={styles.backButton} src='./../../back.png' />
            </Col>
            <Col xs={12} sm={12} md={11} lg={11} xl={11}>

                <Row style={styles.fullWidth} >

                    <Col xs='auto' >
                        <h2>{subskilldata.skill}</h2>
                    </Col>
                    <Col xs='auto' >
                        <Link to="/htmledit" params={subskilldata}>
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
                        {subskilldata.tag.map((tagName, idx) => {
                            return (
                                
                                <Col key={idx} className='colorTags' xs='auto'>
                                    {tagName}
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
                        {subskilldata.prerequisite.map((preReuqisiteName, idx) => {
                            return (
                                
                                <Col className='skilltags' xs='auto'>
                                    {preReuqisiteName}
                                </Col>
                            )
                        })}

                    </Row>
                </div>
                <div style={{ paddingLeft: '.6em' }}>
                    <h3>Roadmap</h3>
                    <SkillCard  props={subskilldata.topics} />
                </div>
            </Col>
        </div>
            </>
        }
        </>
        
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