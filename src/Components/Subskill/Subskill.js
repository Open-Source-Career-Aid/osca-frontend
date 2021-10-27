import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import SkillCard from './../Skill/SkillCard';
import './../../Styles/Skill.css';
import { Link } from "react-router-dom"
import { useParams, useHistory } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading"
import { Loader } from '../Loader/Loader';

function generateRandomColor() {
    // var randomColor = '#'+Math.floor(Math.random()*10777215).toString(16);
    // return randomColor;
    let color = "#";
    for (let i = 0; i < 3; i++)
        color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
    return color;
    //random color will be freshly served
}
let color_dict = {};


const getList = (skillId) => {
    return fetch('http://osca-api.herokuapp.com/form/get-skill/?id=' + skillId)
        .then(data => data.json())
}

const Subskill = (props) => {
    let { Id } = useParams();
    let history = useHistory();

    const [editMode, setEditMode] = useState(0);

    const handleEditMode = () => {
        setEditMode(!editMode);
    }

    const [subskilldata, setSubskilldata] = useState(null);



    useEffect(() => {
        let mounted = true;
        getList(Id)
            .then(items => {
                if (mounted) {
                    // console.log(items, 'mayank', items.skill);
                    setSubskilldata({ ...items });
                }
            })
        return () => mounted = false;
    }, [])


    const { loading } = useLoading('http://osca-api.herokuapp.com/form/get-skill/?id=' + Id);

    return loading ? (
        <Loader message="Loading! please wait...." />
    ) : (
        <>
            <div className="headingRow">
                <Col className="backarrow" xs={12} sm={12} md={1} lg={1} xl={1}>

                    <img onClick={() => history.goBack()} style={styles.backButton} src='./../back.png' />
                </Col>
                <Col xs={12} sm={12} md={11} lg={11} xl={11}>

                    <Row style={styles.fullWidth} >

                        <Col xs='auto' >
                            <h2>{subskilldata.skill}</h2>
                        </Col>
                        <Col xs='auto' >
                            {/* <Link to="/htmledit" params={subskilldata}> */}
                            <Link to={{ pathname: "/htmledit", state: { subskilldata } }}>
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
                            {subskilldata.tags.map((tag, idx) => {
                                return (

                                    <Col key={idx} style={{ backgroundColor: generateRandomColor() }} className='colorTags' xs='auto'>
                                        {tag.tagName}
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
                            {subskilldata.prerequisites.map((preReuqisite, idx) => {
                                return (

                                    <Col className='skilltags' xs='auto'>
                                        {preReuqisite.prereqName}
                                    </Col>
                                )
                            })}

                        </Row>
                    </div>
                    <div style={{ paddingLeft: '.6em', ...styles.fullWidth }} >
                        <h3>Roadmap</h3>
                        <SkillCard props={subskilldata.topics} />
                    </div>
                </Col>
            </div>
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