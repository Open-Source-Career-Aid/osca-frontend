import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
// import { Button, Collapse } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import SkillCard from './SkillCard';
import './../../Styles/Skill.css';
//import EditButton from './../Buttons/Editbutton';
import { useParams, useHistory } from "react-router-dom";
//import Modal from 'react-bootstrap/Modal'
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
//import Tooltip from 'react-bootstrap/Tooltip'

//import { TagsEdit } from '../EditFroms/TagsEdit';
import '../../Styles/EditForms/EditForm.css'
import '../../Styles/EditForms/TagsEdit.css'
import '../../Styles/EditForms/SuperSkillEdit.css'
import { useLoading } from "../../hooks/useLoading"
import { Loader } from '../Loader/Loader';




function generateRandomColor() {
    // var randomColor = '#'+Math.floor(Math.random()*10777215).toString(16);
    // return randomColor;
    let color = "#";
    for (let i = 0; i < 3; i++)
        color += ("0" + Math.floor(Math.random() * Math.pow(20, 2) / 2).toString(16)).slice(-2);
    return color;
    //random color will be freshly served
}

const leftsrc = './../../leftarrow.png';
const upsrc = './../../up.png';

let srcdict = {};
let opendict = {};

let i = 0;


const getList = (skillId) => {
    return fetch('http://osca-api.herokuapp.com/form/get-super-skill/?id=' + skillId)
        .then(data => data.json())
}


const Skill = () => {
    let { Id } = useParams();
    let history = useHistory();
    const [open, setOpen] = useState(opendict);
    const [src, setSrc] = useState(srcdict);
    const [skilldata, setskilldata] = useState(null);

    useEffect(() => {
        let mounted = true;
        getList(Id)
            .then(items => {
                if (mounted) {
                    for (i = 0; i <= items.sub_skills.length; i++) {
                        srcdict[i] = leftsrc;
                        opendict[i] = false;
                    }
                    setskilldata({ ...items });

                }
            })

        return () => mounted = false;
    }, [skilldata])


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
    // console.log(skilldata);
    //tags edit form
    //const [tags, setTags] = useState(false);

    //const handleCloseTagsForm = () => setTags(false);
    //const handleShowTagsForm = () => setTags(true);

    //pre-requisites edit form
    //const [prerequisites, setPrerequisites] = useState(false);

    //const handleClosePrerequisitesForm = () => setPrerequisites(false);
    //const handleShowPrerequisitesForm = () => setPrerequisites(true);

    //pre-requisites edit form
    //const [roadmapEdit, setRoadmapEdit] = useState(false);

    //const handleCloseRoadmapForm = () => setRoadmapEdit(false);
    //const handleShowRoadmapForm = () => setRoadmapEdit(true);

    //edit button
    //const [edit, setEdit] = useState(false);

    /*const handleShowEditButton = () => {
        setEdit(true);
    }
    */


    const { loading } = useLoading('http://osca-api.herokuapp.com/form/get-super-skill/?id=' + Id);

    return loading ? (
        <Loader message="Loading! please wait...." />
    ) : (
        <div className="headingRow">
            <Col className="backarrow" xs={12} sm={12} md={1} lg={1} xl={1}>
                <img onClick={() => history.goBack()} style={styles.backButton} src='./../../back.png' alt="" />
            </Col>
            <Col xs={12} sm={12} md={11} lg={11} xl={11}>

                <Row style={styles.fullWidth} >

                    <Col xs={10} sm={10} md={10} lg={10} xl={10} >
                        <h2>{skilldata.name}</h2>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className="suggest__edit">
                        {/* <Link to='/skilledit'> */}
                        <Link to={{ pathname: "/skilledit", state: { skilldata } }}>

                            Suggest an edit
                        </Link>
                    </Col>
                </Row>
                <div className='tagContainer'>
                    <Row>
                        <Col>
                            <h5 >Tags</h5>
                        </Col>
                    </Row>
                    <Row style={{ flexWrap: "wrap" }}>
                        {skilldata.tags.map((tag, idx) => {
                            return (

                                <Col key={idx} style={{ backgroundColor: generateRandomColor() }} className='colorTags' xs='auto'>
                                    {tag.tagName}
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
                    </Row>
                    <Row style={{ flexWrap: "wrap" }}>
                        {skilldata.prerequisites.map((preReuqisite, idx) => {
                            return (

                                <Col key={idx} style={{ backgroundColor: generateRandomColor() }} className='skilltags' xs='auto'>
                                    {preReuqisite.prereqName}
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
                    {skilldata.sub_skills.map((skill, idx) => {

                        return (
                            <>
                                <Row style={styles.fullWidth} className='align-items-center'  >
                                    <Col xs={11} sm={11} md={11} lg={11} xl={11} >
                                        

                                        <Link to={`/subskill/${skill.id}`}>
                                        <h3 className='skillName'>{skill.skill}</h3>
                                        </Link>
                                    </Col>
                                    {/* <Col xs={1} sm={1} md={1} lg={1} xl={1} >
                                        <Button
                                            style={styles.btn}

                                            onClick={() => handleChange(idx)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}>
                                            <img style={open[idx] ? styles.dropButton : styles.leftbutton} src={src[idx]} alt="" />
                                        </Button>
                                    </Col> */}
                                </Row>
                                {/* <Collapse in={open[idx]}>
                                    <div id="example-collapse-text">

                                        <SkillCard props={skill.topics} />
                                    </div>
                                </Collapse> */}
                            </>

                        )
                    })}
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
        objectFit: 'contain'
    },
    dropButton: {
        height: '.6em',
        width: '1em',
        objectFit: 'contain'
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