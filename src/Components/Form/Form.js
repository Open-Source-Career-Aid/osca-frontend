import React, { useState} from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './../../Styles/Form.css';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import SkillRoadmap from './SkillRoadmap';
import Skill from './Skill';
import { SvgIcon } from '@material-ui/core';

const CustomSwitch = withStyles({
    switchBase: {
        color: '#E7E7E7',
        '&$checked': {
            color: '#E7E7E7',
        },
        '&$checked + $track': {
            backgroundColor: purple[900],
        },
    },
    addField: {
        border: 'solid',
        borderWidth: '2px'
    },
    checked: {},
    track: {},
})(Switch);

function DeleteIcon(props) {
    return (
      <SvgIcon  viewBox="0 0 14 16" fill="none" {...props}>
        <path d="M7.00009 5.51126e-09C7.62831 -4.29406e-05 8.23273 0.250907 8.68936 0.70137C9.146 1.15183 9.42023 1.76766 9.45579 2.42252L9.45958 2.5679H13.4326C13.5764 2.56795 13.7148 2.62498 13.8199 2.72748C13.925 2.82999 13.9889 2.97031 13.9987 3.1201C14.0085 3.2699 13.9635 3.41799 13.8727 3.53446C13.782 3.65093 13.6522 3.72709 13.5098 3.74756L13.4326 3.75309H12.8302L11.8616 14.0405C11.813 14.5534 11.5915 15.0315 11.2365 15.3896C10.8814 15.7477 10.4161 15.9623 9.92347 15.9953L9.79028 16H4.20989C3.71607 16 3.23835 15.8166 2.86209 15.4827C2.48584 15.1488 2.23558 14.686 2.15603 14.1772L2.13862 14.0397L1.1692 3.75309H0.567575C0.43042 3.75308 0.297907 3.70122 0.194541 3.6071C0.0911757 3.51297 0.0239503 3.38296 0.00529734 3.24109L0 3.16049C5.78389e-06 3.01729 0.0496761 2.87894 0.139825 2.77102C0.229975 2.6631 0.354504 2.59291 0.490384 2.57343L0.567575 2.5679H4.5406C4.5406 1.88685 4.79972 1.2337 5.26096 0.752121C5.72221 0.270546 6.34779 5.51126e-09 7.00009 5.51126e-09ZM11.6898 3.75309H2.30965L3.26847 13.9236C3.2897 14.1505 3.38549 14.3628 3.53956 14.5244C3.69364 14.6859 3.89652 14.7869 4.11378 14.8101L4.20989 14.8148H9.79028C10.2443 14.8148 10.6295 14.479 10.7173 14.0231L10.7325 13.9236L11.689 3.75309H11.6898ZM8.32443 5.92593C8.46158 5.92593 8.5941 5.97779 8.69746 6.07191C8.80083 6.16604 8.86805 6.29606 8.8867 6.43793L8.892 6.51852V12.0494C8.89196 12.1995 8.83733 12.3441 8.73916 12.4538C8.64098 12.5635 8.50658 12.6302 8.36311 12.6404C8.21964 12.6506 8.0778 12.6036 7.96625 12.5089C7.8547 12.4141 7.78175 12.2787 7.76215 12.13L7.75685 12.0494V6.51852C7.75685 6.36135 7.81665 6.21063 7.92309 6.09949C8.02953 5.98836 8.1739 5.92593 8.32443 5.92593ZM5.67575 5.92593C5.8129 5.92593 5.94541 5.97779 6.04878 6.07191C6.15214 6.16604 6.21937 6.29606 6.23802 6.43793L6.24332 6.51852V12.0494C6.24328 12.1995 6.18865 12.3441 6.09047 12.4538C5.9923 12.5635 5.8579 12.6302 5.71443 12.6404C5.57096 12.6506 5.42912 12.6036 5.31757 12.5089C5.20602 12.4141 5.13307 12.2787 5.11347 12.13L5.10817 12.0494V6.51852C5.10817 6.36135 5.16797 6.21063 5.27441 6.09949C5.38085 5.98836 5.52522 5.92593 5.67575 5.92593ZM7.00009 1.18519C6.66772 1.1852 6.34751 1.31569 6.10302 1.55076C5.85853 1.78583 5.70763 2.10829 5.68029 2.45412L5.67575 2.5679H8.32443C8.32443 2.20118 8.1849 1.84948 7.93654 1.59017C7.68818 1.33086 7.35132 1.18519 7.00009 1.18519Z" fill="white" />
      </SvgIcon>
    );
  }


const RoadmapForm = () => {

    const [state, setState] = useState({
        name: "",
        organization_name: "IIT Roorkee",
        branch_name: "",
        program_duration: "",
        show: false,
        is_supperskill: false,
        skill: "",
    });

    const [preReqs, setpreReqs] = useState([{name: null}]);
    
    const [preReqsField, setPreReqsField] = useState('');
    
    const [tags, setTags] = useState([{name: null}]);
    
    const [tagsField, setTagsField] = useState('');
   

    const [skillRoadmapdata, setSkillRoadmapdata] = useState();

    const [skilldata, setSkilldata] = useState();


    const handleChangeName = (e) => {
        setState({ ...state, name: e.target.value })
    }

    const handleChangeOrganizationName = (e) => {
        setState({ ...state, organization_name: e.target.value })
    }

    const handleChangeBranchName = (e) => {
        setState({ ...state, branch_name: e.target.value })
    }

    const handleChangeyear = (e) => {
        setState({ ...state, program_duration: e.target.value })
    }

    const handleChangecheckboxShow = (e) => {
        setState({ ...state, show: !state.show })
    }

    const handleChangeSuperSkillcheckbox = (e) => {
        if(e.target.value === false) {
            setSkillRoadmapdata(null);
        } else {
            setSkilldata(null);
        }
        setState({ ...state, is_supperskill: !state.is_supperskill })
    }


    // handle change in input of pre-req
    const handleChangePreReqName = (e) => {
        setPreReqsField(e.target.value);
    }

    // handle click on add button in pre Req 
    const handleClickPreRequisite = () => {
       
        let values = [...preReqs];
        values.push({name: preReqsField});
        setPreReqsField('');
        setpreReqs([...values]);
    }

    //handle deletion of pre Requisetes

    const handleDeletePreReqs = (e, idx) => {
        let values = [...preReqs];
        values.splice(idx, 1);
        setpreReqs([...values]);
    }

    // handle clear pre reqs

    const handleClickPreqsClear = (e) => {
        setpreReqs([{name: null}]);
    }

    //handle change of tag name

    const handleChangeTagName = (e) => {
        setTagsField(e.target.value);
    }

    // handle click on add button in pre Req 
    const handleClickTags = () => {
        // console.log(, preReqsField);
        let values = [...tags];
        values.push({name: tagsField});
        setTagsField('');
        setTags([...values]);
    }

    // handle deletion of tags
    
    const handleDeleteTags = (e, idx) => {
        let values = [...tags];
        values.splice(idx, 1);
        setTags([...values]);
    }

    // handles clear all tags 
    const handleClicktagsClear = (e) => {
        setTags([{name: null}]);
    }

    // gets data from skill Roadmap component 

    const getDataFromSkillRoadmap = (data) => {
        setSkilldata(null);
        setSkillRoadmapdata({...data})
    }

    //gets data from sill component

    const getDataFromSkill = (data) => {
        setSkillRoadmapdata(null);
        setSkilldata({...data});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let details = state;
        let roadmapOrSkill ;
        if(skillRoadmapdata === undefined ||skillRoadmapdata === null ) {
            roadmapOrSkill = skilldata;            
        } else {
            roadmapOrSkill = skillRoadmapdata;
        }
        const prerequisites = preReqs;
        const formData = {
            ...details,
            prerequisites,
            tags,
            roadmapOrSkill
        };

        console.log(formData);

        // axios.post('https://oscaweb.herokuapp.com/form/add-new-skill/', formData)
        // .then(res => {
        //     history.push('/thankyou');

        // })
        // .catch(error => {
        //     console.log(error);

        // })



    }

    return (
        <div className="headingRow">

            <Col className="backarrow" xs={12} sm={12} md={1} lg={1} xl={1}>
                <img style={styles.buttonIcon} src='./../../../../../back.png'  />
            </Col>

            <Col xs={12} sm={12} md={11} lg={11} xl={11}>

                {/* Your code goes Here */}
                <h4>Add a Roadmap</h4>
                <br />
                <h5>Personal information</h5>
                <Form>

                    <Row className='spacebetween'>
                        <Col xs={12} sm={12} md={5} lg={5} xl={5} >
                            <Form.Group controlId='formName'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type='text' value={state.name} placeholder='Enter your name' onChange={handleChangeName} />
                            </Form.Group>
                        </Col>

                        <Col className='formgroup' xs={12} sm={12} md={5} lg={5} xl={5} >
                            <Form.Group controlId='intiuteName'>
                                <Form.Label>Organization Name</Form.Label>
                                <Form.Control required type='text' readOnly value={state.organization_name} placeholder='Enter organization' onChange={handleChangeOrganizationName} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <br />
                    <Row className='spacebetween'>
                        <Col xs={12} sm={12} md={5} lg={5} xl={5}  >
                            <Form.Group controlId='branchName'>
                                <Form.Label>Branch Name</Form.Label>
                                <Form.Control required type='text' value={state.branch_name} placeholder='Enter Your Branch ( Mechanical, CSE,.. )' onChange={handleChangeBranchName} />
                            </Form.Group>
                        </Col>
                        <Col className='formgroup' xs={12} sm={12} md={5} lg={5} xl={5} >
                            <Form.Group controlId='Year'>
                                <Form.Label>Year</Form.Label>
                                <Form.Control required type='text' value={state.program_duration} placeholder='2018 - 22' onChange={handleChangeyear} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <br />

                    <Row className='spacebetween'>
                        <Col xs={10} sm={10} md={4} lg={4} xl={4} >
                            <p>Show personal info on website</p>
                        </Col>
                        <Col xs={2} sm={2} md={1} lg={1} xl={1} >
                            <FormControlLabel control={<CustomSwitch checked={state.showInfo} onChange={handleChangecheckboxShow} name="checkedA" />} label="" />
                        </Col>
                    </Row>
                    <hr />
                    <br />
                    <h2>Roadmap</h2>
                    <br />

                    <Row className='spacebetween'>
                        <Col xs={10} sm={10} md={4} lg={4} xl={4} >
                            <p>Is this a Superskill</p>
                        </Col>
                        <Col xs={2} sm={2} md={1} lg={1} xl={1} >
                            <FormControlLabel control={<CustomSwitch checked={state.is_supperskill} onChange={handleChangeSuperSkillcheckbox} name="checkedB" />} label="" />
                        </Col>
                    </Row>
                    <Row className="py-4">
                        <Col xs={12} sm={12} md={6} lg={7} xl={8}  >
                            Pre-requisites
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={5} xl={4} className="field text-center justify-content-center">
                            <input onChange={e => handleChangePreReqName(e)} value={preReqsField} type="text" className='inputField' placeholder="Add a pre-requisite" />
                            <AddIcon onClick={e => handleClickPreRequisite(e)} className='addIcon' />
                        </Col>
                    </Row>
                    <Row className="backDrop">
                    {preReqs.map((preReq, idx) => {
                        if(idx>0) {

                            return (
                                <Col xs='auto' md='auto' className='tags'>
                                    <Row  className='tagsRow'>

                                    <Col xs='auto' md='auto'  style={{maxWidth: '80%', overflow: 'hidden' , whiteSpace:'nowrap'}}>
                                            <span   >{preReq.name}</span>
                                    </Col>
                                    <Col xs='auto' md='auto' style={{paddingRight: '0'}}>
                                        <DeleteIcon onClick={e => handleDeletePreReqs(e, idx)}  style={styles.btn} />
                                    </Col>
                                    </Row>

                                 </Col>
                        )
                        } else {return null}

                    })}
                       

                        
                        <Row onClick={e => handleClickPreqsClear(e)} className="justify-content-end text-end">
                            Clear All
                        </Row>
                    </Row>
                    <Row className="py-4 ">
                        <Col xs={12} sm={12} md={6} lg={7} xl={8} >
                            Tags
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={5} xl={4}  className="field text-center justify-content-center">
                            <input onChange={e =>  handleChangeTagName(e)} value={tagsField} type="text" className='inputField' placeholder="Add a Tag" />
                            <AddIcon onClick={e => handleClickTags(e)} className='addIcon' />
                        </Col>
                    </Row>
                    <Row className="backDrop">
                        {tags.map((tag, idx) => {
                            if(idx>0) {

                                return (
                                    <Col xs='auto' md='auto' className='tags'>
                                    <Row  className='tagsRow'>

                                    <Col xs='auto' md='auto' style={{maxWidth: '80%', overflow: 'hidden' , whiteSpace:'nowrap'}} >
                                        <span   >{tag.name}</span>
                                    </Col>
                                    <Col xs='auto' md='auto' style={{paddingRight: '0'}}>
                                        <DeleteIcon onClick={e => handleDeleteTags(e, idx)}  style={styles.btn} />
                                    </Col>
                                    </Row>

                                 </Col>
                            )
                            } else {return null}

                        })}   
                         
                        <Row onClick={e => handleClicktagsClear(e)} className="justify-content-end text-end">
                            Clear All
                        </Row>
                    </Row>
                </Form >
                {
                    state.is_supperskill 
                    ?
                    <SkillRoadmap onChange={skillRoadmapdata => getDataFromSkillRoadmap(skillRoadmapdata)}  />
                    :
                    <Skill onChange={skilldata => getDataFromSkill(skilldata)} />
                }
                <Row xs='auto' className="justify-content-center text-end">
                    <Button onClick={e => handleSubmit(e)} style={styles.submitButton} type='submit'>
                        Submit
                    </Button>
                </Row>
            </Col>
            
        </div>
    );

}


const styles = {

    buttonIcon: {
        height: '1.1em',
        width: '1.0em',

    },
    btn: {
        backgroundColor: '#989898',
        borderBottomRightRadius: '24%',
        borderTopRightRadius: '24%',
        height: '1em',
        width: '1.2em',
        padding: '.15em'
    },
    submitButton: {
        backgroundColor: '#8750A9',
        fontWeight: '700',
        marginTop: '2em',
        borderRadius: '2em',
        border: 'none',
        fontSize: '1.2em'
    }
}

export default RoadmapForm;