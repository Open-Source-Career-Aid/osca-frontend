import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button, InputGroup, FormControl}  from 'react-bootstrap';
import Deletebutton from '../Buttons/Deletebutton';
import Editbutton from '../Buttons/Editbutton';
import './Skill.css';
import Addbutton from '../Buttons/AddButton';
import OkButton from '../Buttons/OkButton';

const Skill = (props) => {

    const [data, setData] = useState();
    const [topicsidx, setTopicsidx] = useState({'0': 0});
   
    const [title, setTitle] = useState('');

    const [titleEdit, setTitleEdit] = useState(0);

    const [topics, setTopics] = useState([{topicName: null, resources:[{link: null}] }])

    const [inputsLinks, setInputLinks] = useState({'0': ''});

    // handles the change in title name

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    //handles the click on edit button

    const handleEditButtonTitle = () => {
        setTitleEdit(!titleEdit);
    }

    //handles ok button in title
    const handleOkButtonTitle = () => {
        if(title === '' || title === null ) {
            alert('cannot be empty');
            return;
        }
        setTitleEdit(!titleEdit);
    }

    // changes to input when clicked on edit icon
    const handleClickEdit = (idx) => {
        let ex = topicsidx;
        ex[idx] = 1- ex[idx];
        setTopicsidx({...ex});
    }

    // saves the topic name 

    const handleClickOk= (idx) => {
        
        if(topics[idx].topicName === '' || topics[idx].topicName === null ) {
            alert('cannot be empty');
            return;
        }
        handleClickEdit(idx);

    }

    //handels the change in topic name

    const handleChangeTopicName = (e, idx) => {
        if(e.target.value === '') {
            alert('Cannot be empty');
            return;
        }
        let values = [...topics];
        values[idx].topicName = e.target.value;
        setTopics([...values]);
    }   

    // Deletion of Topic

    const handleClickDelete = (idx) => {
        let values = [...topics];
        values.splice(idx, 1);
        setTopics([...values]);
    }

    // Addition of link to resouces of a topic

    const handleAddResource = (idx) => {
        if(inputsLinks[idx] === '' || inputsLinks[idx] === null) {
            alert('Cannot be Empty');
            return;
        } 
        let values = [...topics];
        values[idx].resources.push({link: inputsLinks[idx]});
        let links =    inputsLinks;
        // console.log(links);
        links[idx] = '';
        // console.log(links);
        setInputLinks({...links});
        setTopics([...values]);
    }

    // Handle change in input links 

    const handleChangeResourceLink = (e, idx) => {
        let values = {...inputsLinks};
        values[idx] = e.target.value;
        setInputLinks({...values});
    }

    // handle deletion of resource links

    const handleDeleteResource = (idx1, idx2) => {
        let values = [...topics];
        values[idx1].resources.splice(idx2, 1);
        setTopics([...values]);
    }

    // Addition of topics
    
    const handleAddTopic = () => {
        const values = [...topics];
        values.push({ topicName: null, resources: [{ link: null }] });
        const indexofAddedtopic = values.length ;
        topicsidx[indexofAddedtopic -1] = 0;
        inputsLinks[indexofAddedtopic ] = null;
        setInputLinks({...inputsLinks});
        setTopicsidx({...topicsidx});
        setTopics(values);
    }

    // handle change in skill data

    const handleChangeInData = () => {
        let skillName = title;
        let values = {
            skillName,
            topics
        }
        setData({...values});
        props.onChange(data);
    }

    return (
        <div onChange={e => handleChangeInData(e)} className='Skill'>
            <Row className='title '>
                <Col>
                    {titleEdit? 
                        <h2>{title}</h2>
                        :
                        <InputGroup  style={styles.input} className="mb-4 ">
                        <FormControl
                         required
                        value={title}
                        onChange={e => handleChangeTitle(e)}
                        placeholder={"Name of the Topic"}
                        aria-label="Name of the Topic"
                        aria-describedby="basic-addon2"
                        className ="inputresource"
                        />
                        </InputGroup>
                }
                </Col>
                <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                    {titleEdit
                    ?
                    <Editbutton fun={handleEditButtonTitle} />
                    :
                    <OkButton fun={handleOkButtonTitle} />
                }
                </Col>
            </Row>
            <div className="topicContainer">

            
            {topics.map((topic, idx) => {
            return (
                <div className='container'>
                <Row >
                <Col   >
                    {topicsidx[idx] ?
                        <h3>{topic.topicName}</h3>
                        :
                    <>
                        <InputGroup style={styles.input} className="mb-3 ">
                        <FormControl
                         required
                        value={topics[idx].name }
                        onChange={e => handleChangeTopicName(e, idx)}
                        placeholder={"Name of the Topic"}
                        aria-label="Name of the Topic"
                        aria-describedby="basic-addon2"
                        className ="inputresource"
                        />
                        </InputGroup>
                    </>
                }
                </Col>
                {topicsidx[idx]  
                    ? 
                    <Col xs={2} sm={2} md={1} lg={1} xl={1} >
                    <Editbutton index={idx} fun={handleClickEdit} shape='rounded' color='#FFFFFF'  />
                </Col>
                    :
                    <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                    <OkButton index={idx} fun={handleClickOk} shape='rounded' color='#FFFFFF'  />
                </Col>
                }
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                    <Deletebutton index={idx} fun={handleClickDelete}  shape='rounded' color='#FFFFFF' />
                </Col>
            </Row>
           <div className='resourcelinks'>
                
                
                <InputGroup className="mb-3 ">
                <FormControl
                 required
                values={inputsLinks[idx]}
                onChange={e => handleChangeResourceLink(e, idx)}
                placeholder="Paste the resource link here"
                aria-label="Paste the resource link here"
                aria-describedby="basic-addon2"
                className ="inputresource"
                />
            
                <Addbutton type='submit' index={idx} fun={handleAddResource}  color='#FFFFFF' />
                </InputGroup>
                {topic.resources.map((resource, idx2) => {
             
                    if(idx2 > 0) {
                        return (

                            <Row>
                                <Col>
                                    <a href={resource.link}>{resource.link}</a>
                                </Col>
                                <Col  xs={1} sm={1} md={1} lg={1} xl={1} >
                                    <Deletebutton  index={idx} index2={idx2} fun={handleDeleteResource} />
                                </Col>
                            </Row>
                        );
                    } else {return null;}

                
                    // )
                })}
           </div>

                <hr className='hrline' />
            </div>
            )})}
            </div>
           <div>

           <Button onClick={e => handleAddTopic(e)} style={styles.btn} >
                        Add a topic    
                    </Button> 
           </div>
        </div>
    )

};

const styles = {
    btn: {
        display:'block',
        margin: '2%  auto ',
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: '2em',
        color: '#464646',
        fontSize: '.91em',
        fontWeight: '700',
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
        paddingTop: '.4em',
        paddingBottom: '.4em',
    },
    input: {
        borderRadius: '2em',
        paddingTop: '.7em',
        marginBottom: '.8em'
    }
}

export default Skill;