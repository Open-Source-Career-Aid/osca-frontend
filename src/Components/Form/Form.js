import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './../../Styles/Form.css';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

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

    const [prereqs, setpreReqs] = useState([{ value: null }]);
    const [tags, setTags] = useState([{ value: null }]);
    const [fields, setFields] = useState([{ value: null, resources: [{ value: null }] }]);

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
        setState({ ...state, is_supperskill: !state.is_supperskill })
    }

    const handleChangeskill = (e) => {
        setState({ ...state, skill: e.target.value })
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        const detail = fields;
        const prerequisites = prereqs;
        const formData = {
            ...state,
            prerequisites,
            tags,
            detail
        };


        // axios.post('https://oscaweb.herokuapp.com/form/add-new-skill/', formData)
        // .then(res => {
        //     history.push('/thankyou');

        // })
        // .catch(error => {
        //     console.log(error);

        // })



    }


<<<<<<< Updated upstream
 return (
    <div className="headingRow">
       
        <Col className="backarrow" xs={12} sm={12} md={1}  lg={1} xl={1}>
              <img style={styles.buttonIcon} src='./../../../../../Vector.png' />
        </Col>
       
        <Col xs={12} sm={12} md={11}  lg={11} xl={11}>

            {/* Your code goes Here */}
            <h4>Add a Roadmap</h4>
            <br/>
            <h5>Personal information</h5>
            <Form onSubmit={e => handelSubmit(e)}>
               
                <Row className='spacebetween'>
                    <Col xs={12} sm={12} md={4} lg={4} xl={5} >
                        <Form.Group controlId='formName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type='text' value={state.name} placeholder='Enter your name' onChange={handleChangeName} />
                        </Form.Group>
                    </Col>
                   
                    <Col className='formgroup' xs={12} sm={12} md={4} lg={4} xl={5} >
                        <Form.Group controlId='intiuteName'>
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control required type='text' readOnly value={state.organization_name} placeholder='Enter organization' onChange={handleChangeOrganizationName} />
                        </Form.Group>
                    </Col>
                </Row>
                <br/>
                <Row className='spacebetween'>
                    <Col xs={12} sm={12} md={4} lg={4} xl={5}  >
                        <Form.Group controlId='branchName'>
                            <Form.Label>Branch Name</Form.Label>
                            <Form.Control required type='text' value={state.branch_name} placeholder='Enter Your Branch ( Mechanical, CSE,.. )' onChange={handleChangeBranchName} />
                        </Form.Group>
                    </Col>
                    <Col className='formgroup' xs={12} sm={12} md={4} lg={4} xl={5} >
                        <Form.Group controlId='Year'>
                            <Form.Label>Year</Form.Label>
                            <Form.Control required type='text' value={state.program_duration} placeholder='2018 - 22' onChange={handleChangeyear} />
                        </Form.Group>
                    </Col>
                </Row>
            
                <br/>
            
                <Row className='spacebetween'>
                    <Col xs={10} sm={10} md={4} lg={4} xl={4} >
                        <p>Show personal info on website</p>
                    </Col>
                    <Col xs={2} sm={2} md={1} lg={1} xl={1} >
                        <FormControlLabel control={<CustomSwitch checked={state.showInfo} onChange={handleChangecheckboxShow} name="checkedA" />} label="" />
                    </Col>
                </Row>
                <hr />
                <br/>
                <h2>Roadmap</h2>
                <br/>

                <Row className='spacebetween'>
                    <Col xs={10} sm={10} md={4} lg={4} xl={4} >
                        <p>Is this a Superskill</p>
                    </Col>
                    <Col xs={2} sm={2} md={1} lg={1} xl={1} >
                        <FormControlLabel control={<CustomSwitch checked={state.is_supperskill} onChange={handleChangeSuperSkillcheckbox} name="checkedB" />} label="" />
                    </Col>
                </Row>
               
            </Form >
        </Col>
    </div>
 );   
=======
    return (
        <div className="headingRow">

            <Col className="backarrow" xs={12} sm={12} md={1} lg={1} xl={1}>
                <img style={styles.buttonIcon} src='./../../../../../Vector.png' />
            </Col>

            <Col xs={12} sm={12} md={11} lg={11} xl={11}>

                {/* Your code goes Here */}
                <h4>Add a Roadmap</h4>
                <br />
                <h5>Personal information</h5>
                <Form onSubmit={e => handelSubmit(e)}>

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
                    <Row className="py-3">
                        <Col xs={12} sm={12} lg={9} xl={9} md={7}>
                            Pre-requisites
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={3} xl={3} className="field text-center justify-content-center">
                            <input type="text" className='inputField' placeholder="Add a pre-requisite" />
                            <AddIcon className='addIcon' />
                        </Col>
                    </Row>
                    <Row className="backDrop">
                        <Col lg={2} xl={2} md={6} sm={12} xs={12} className="py-1">
                            <input type="text" className="subtFields" placeholder="HTML" />
                            <span className="deleteIcon">
                                <DeleteOutlineOutlinedIcon />
                            </span>
                        </Col>
                        <Col lg={3} xl={3} md={6} sm={12} xs={12} className="py-1">
                            <input type="text" className="subtFields" placeholder="Machine Learning" />
                            <span className="deleteIcon">
                                <DeleteOutlineOutlinedIcon />
                            </span>
                        </Col>
                        <Col lg={2} xl={2} md={6} sm={12} xs={12} className="py-1">
                            <input type="text" className="subtFields" placeholder="HTML" />
                            <span className="deleteIcon">
                                <DeleteOutlineOutlinedIcon />
                            </span>
                        </Col>
                        <Col lg={3} xl={3} md={6} sm={12} xs={12} className="py-1">
                            <input type="text" className="subtFields" placeholder="Machine Learning" />
                            <span className="deleteIcon">
                                <DeleteOutlineOutlinedIcon />
                            </span>
                        </Col>
                        <Row className="justify-content-end text-end">
                            Clear All
                        </Row>
                    </Row>
                    <Row className="py-3 pt-4 justify-content-center">
                        <Col xs={12} sm={12} lg={9} xl={9} md={7}>
                            Tags
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={3} xl={3} className="field text-center justify-content-center">
                            <input type="text" className='inputField' placeholder="Add a Tag" />
                            <AddIcon className='addIcon' />
                        </Col>
                    </Row>
                    <Row className="backDrop">
                        <Col lg={2} xl={2} md={6} sm={12} xs={12} className="py-1">
                            <input type="text" className="subtFields" placeholder="HTML" />
                            <span className="deleteIcon">
                                <DeleteOutlineOutlinedIcon />
                            </span>
                        </Col>
                        <Col lg={3} xl={3} md={6} sm={12} xs={12} className="py-1">
                            <input type="text" className="subtFields" placeholder="Machine Learning" />
                            <span className="deleteIcon">
                                <DeleteOutlineOutlinedIcon />
                            </span>
                        </Col>
                        <Col lg={2} xl={2} md={6} sm={12} xs={12} className="py-1">
                            <input type="text" className="subtFields" placeholder="HTML" />
                            <span className="deleteIcon">
                                <DeleteOutlineOutlinedIcon />
                            </span>
                        </Col>
                        <Col lg={3} xl={3} md={6} sm={12} xs={12} className="py-1">
                            <input type="text" className="subtFields" placeholder="Machine Learning" />
                            <span className="deleteIcon">
                                <DeleteOutlineOutlinedIcon />
                            </span>
                        </Col>
                        <Row className="justify-content-end text-end">
                            Clear All
                        </Row>
                    </Row>
                </Form >
            </Col>
        </div>
    );
>>>>>>> Stashed changes

}


const styles = {

    buttonIcon: {
        height: '2.5vh',
        width: '2.5vh',

    }
}

export default RoadmapForm;