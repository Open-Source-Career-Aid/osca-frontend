import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import SkillCard from './../Skill/SkillCard';
import './../../Styles/Skill.css';
import { Link } from "react-router-dom"
import { useParams, useHistory } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading"
import { Loader } from '../Loader/Loader';
import { Button, Collapse } from 'react-bootstrap';
import './newSubskill.css';

function generateRandomColor() {
    // var randomColor = '#'+Math.floor(Math.random()*10777215).toString(16);
    // return randomColor;
    let color = "#";
    for (let i = 0; i < 3; i++)
        color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
    return color;
    //random color will be freshly served
}
//let color_dict = {};

const leftsrc = './../../leftarrow.png';
const upsrc = './../../up.png';

let srcdict = {};
let opendict = {};

let i = 0;


const roadmap = {
    name: 'HTML',
    tags: [{ tagName: 'HTML' }, { tagName: 'HTML' }, { tagName: 'HTML' }, { tagName: 'HTML' }, { tagName: 'HTML' }, { tagName: 'HTML' }],
    prerequisites: [{ prereqName: 'HTML' }, { prereqName: 'HTML' }, { prereqName: 'HTML' }, { prereqName: 'HTML' }],

    levels: [
        [
            {
                name: 'HTML',
                links: [
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' }
                ],
                subTopics: null
            }
        ],
        [
            {
                name: 'HTML24',
                links: null,
                subTopics: [
                    {
                        name: 'colorwe',
                        links: [
                            { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                            { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                            { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' }
                        ],
                    },
                    {
                        name: 'Tagwe',
                        links: [
                            { link: 'www.google.com' },
                            { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                            { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' }
                        ],
                    }
                ]
            },
            {
                name: 'HTML12',
                links: [
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' }
                ],
                subTopics: null
            }
        ],
        [
            {
                name: 'HTML3',
                links: [
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' },
                    { link: 'https://cdn.discordapp.com/attachments/852968860768010280/.... ' }
                ],
                subTopics: null
            }
        ],
    ]


}





const getList = (skillId) => {
    return fetch('http://osca-api.herokuapp.com/form/get-skill/?id=' + skillId)
        .then(data => data.json())
}

const NewSubskill = (props) => {
    let { Id } = useParams();
    let history = useHistory();
    const [open, setOpen] = useState(opendict);
    const [src, setSrc] = useState(srcdict);

    //const [editMode, setEditMode] = useState(0);

    /*const handleEditMode = () => {
        setEditMode(!editMode);
    }*/

    const [subskilldata, setSubskilldata] = useState({ ...roadmap });

    // const [show_tooltip,setShow] =useState({"0":1});
    // props = props.props;
    // // const target = useRef(null);
    // // console.log(props);
    // const handleChange = (link, idx) => {
    //   navigator.clipboard.writeText(link) ;
    //   let item = show_tooltip;
    //   item[idx]=!item[idx];
    //     setShow({...item});
    // }

    const handleChange = (idx) => {
        let values = { ...open };
        values[idx] = !values[idx];
        setOpen({ ...values });
        if (src[idx] === upsrc) {
            src[idx] = leftsrc;
            setSrc({ ...src })
        } else {
            src[idx] = upsrc;
            setSrc({ ...src })
        }
    }

    const handleChangeNest = (idx, idx2) => {
        let values = { ...open };
        values[10000 * idx + idx2] = !values[10000 * idx + idx2];
        setOpen({ ...values });
        if (src[10000 * idx + idx2] === upsrc) {
            src[10000 * idx + idx2] = leftsrc;
            setSrc({ ...src })
        } else {
            src[10000 * idx + idx2] = upsrc;
            setSrc({ ...src })
        }
    }


    useEffect(() => {
        let mounted = true;
        getList(Id)
            .then(items => {
                if (mounted) {

                    for (i = 0; i < items.levels.length; i++) {
                        opendict[i] = 0;
                        srcdict[i] = leftsrc;

                        for (let j = 0; j < items.levels[i].topics.length; j++) {

                            opendict[10000 * i + j] = 0;
                            srcdict[10000 * i + j] = leftsrc;
                        }
                    }
                    {
                        if (items.prerequisites.length === 0) {
                            items.prerequisites.push({ prereqName: "NA" })
                        }
                    }
                    {
                        if (items.tags.length === 0) {
                            items.tags.push({ tagName: "NA" })
                        }
                    }

                    setOpen({ ...opendict });
                    setSrc({ ...srcdict });
                    setSubskilldata({ ...items });
                }
            })
        return () => mounted = false;
    }, [Id])


    const { loading } = useLoading('http://osca-api.herokuapp.com/form/get-skill/?id=' + 1);
    // const loading=false;
    return loading ? (
        <Loader message="Loading! please wait...." />
    ) : (
        <>
            <div className="headingRow">
                <Col className="backarrow" xs={12} sm={12} md={1} lg={1} xl={1}>

                    <img onClick={() => history.goBack()} style={styles.backButton} src='./../back.png' alt="" />
                </Col>
                <Col xs={12} sm={12} md={11} lg={11} xl={11}>

                    <Row style={styles.fullWidth} >

                        <Col xs='auto' >
                            <h2>{subskilldata.skill || roadmap.name}</h2>
                        </Col>
                        {/*<Col xs='auto' >
                            {/* <Link to="/htmledit" params={subskilldata}>
                            <Link to={{ pathname: "/subskilledit", state: { subskilldata } }}>
                                <h6 style={styles.suggestEdit}>Suggest an edit</h6>
                            </Link>
                        </Col>*/}
                    </Row>
                    <div className='tagContainer'>
                        <Row>
                            <Col>
                                <h5 >Tags</h5>
                            </Col>
                        </Row>
                        <Row style={{ flexWrap: "wrap" }}>
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
                        <Row style={{ flexWrap: "wrap" }}>
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

                        <>
                            {subskilldata.levels.map((level, idx) => {

                                return (
                                    <div className="try">
                                        {/*<div className="progCircle"></div>*/}
                                        <Row style={styles.fullWidth} className='align-items-center level'  >
                                            <Col xs={11} sm={11} md={11} lg={11} xl={11} >

                                                <span className="levelName" >{`Level ${idx + 1}`}</span>
                                            </Col>
                                            <Col xs={1} sm={1} md={1} lg={1} xl={1} >
                                                <Button
                                                    style={styles.btn}

                                                    onClick={() => handleChange(idx)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open}>
                                                    <img style={open[idx] ? styles.dropButton : styles.leftbutton} src={src[idx]} alt="" />
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Collapse in={open[idx]}>
                                            <div id="example-collapse-text " className="outerlevelsubtopic">

                                                {level.topics.map((topic, idx2) => {
                                                    return (
                                                        <>

                                                            {topic.subtopics.length >= 1 ?
                                                                <div className="subtopicsDropdown">
                                                                    {/*<div className="progCircle"></div>*/}
                                                                    <Row style={styles.fullWidth} className='align-items-center subtopic'  >
                                                                        <Col xs={11} sm={11} md={11} lg={11} xl={11} >

                                                                            <span className="levelName" >{topic.topicName}</span>
                                                                        </Col>
                                                                        <Col xs={1} sm={1} md={1} lg={1} xl={1} >
                                                                            <Button
                                                                                style={styles.btn}

                                                                                onClick={() => handleChangeNest(idx, idx2)}
                                                                                aria-controls="example-collapse-text"
                                                                                aria-expanded={open}>
                                                                                <img style={open[10000 * idx + idx2] ? styles.dropButton : styles.leftbutton} src={src[10000 * idx + idx2]} alt="" />
                                                                            </Button>
                                                                        </Col>
                                                                    </Row>
                                                                    <Collapse in={open[10000 * idx + idx2]}>
                                                                        <div id="example-collapse-text " className="outerlevelsubtopic">
                                                                            {topic.subtopics.map((subTopic, idx3) => {
                                                                                return (
                                                                                    <>
                                                                                        <div className="level2">
                                                                                            {/*<div className="progCircle"></div>*/}
                                                                                            <span className="levelName">{subTopic.value}</span>
                                                                                            {subTopic.resources.map((link_it, idx4) => {
                                                                                                return (
                                                                                                    <div className="resourceLink">
                                                                                                        <Col style={{ maxWidth: '90%', overflow: 'hidden' }} xs={10} sm={11} md={11} lg={11} xl={11}>
                                                                                                            <span  >
                                                                                                                <Link to={{ pathname: `${link_it.link}` }} target="_blank" rel="noopener noreferrer">
                                                                                                                    {link_it.link}
                                                                                                                </Link>
                                                                                                            </span>
                                                                                                        </Col>
                                                                                                        <Col className='copyButtonCol' xs={2} sm={1} md={1} lg={1} xl={1}>

                                                                                                            <Button id={idx} className="copyButton" style={styles.copyButton} onClick={() => { navigator.clipboard.writeText(link_it.link) }}>
                                                                                                                {/* <Link> */}
                                                                                                                <img style={styles.copyButtonIcon} src="../copy.png" alt="" />
                                                                                                                {/* </Link> */}
                                                                                                            </Button>

                                                                                                        </Col>
                                                                                                    </div>
                                                                                                )
                                                                                            })}
                                                                                        </div>
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    </Collapse>
                                                                </div>
                                                                :
                                                                <div className="level1">
                                                                    {/*<div className="progCircle"></div>*/}
                                                                    <span className="levelName">{topic.topicName}</span>
                                                                    {topic.resources.map((link_it, idx3) => {
                                                                        return (
                                                                            <div className="resourceLink">
                                                                                <Col style={{ maxWidth: '90%', overflow: 'hidden' }} xs={10} sm={11} md={11} lg={11} xl={11}>
                                                                                    <span  ><Link to={{ pathname: `${link_it.link}` }} target="_blank" rel="noopener noreferrer">
                                                                                        {link_it.link}
                                                                                    </Link></span>
                                                                                </Col>
                                                                                <Col className='copyButtonCol' xs={2} sm={1} md={1} lg={1} xl={1}>

                                                                                    <Button id={idx} className="copyButton" style={styles.copyButton} onClick={() => { navigator.clipboard.writeText(link_it.link) }}>
                                                                                        {/* <Link> */}
                                                                                        <img style={styles.copyButtonIcon} src="../copy.png" alt="" />
                                                                                        {/* </Link> */}
                                                                                    </Button>

                                                                                </Col>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>

                                                            }
                                                        </>
                                                    )
                                                })}


                                            </div>
                                        </Collapse>
                                    </div>

                                )
                            })}
                        </>
                    </div>
                </Col>
            </div>
        </>

    );

}


const styles = {
    btn: {
        backgroundColor: 'transparent',
        border: 'none',
        outline: "0"
    },
    leftbutton: {
        height: '.8em',
        width: '.8em',
        transform: 'rotate(180deg)',
        border: "none",
        outline: "0"
    },
    dropButton: {
        height: '.8em',
        width: '.8em',
        border: "none",
        outline: "0"
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
    copyButton: {
        backgroundColor: 'transparent',
        border: 'none'
    },
    copyButtonIcon: {
        height: '1.5em',
        width: '1.2em',
        objectFit: 'contain'
    }

}

export default NewSubskill;


{/* <h1>mauanl</h1> */ }
