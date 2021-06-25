import React ,{useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button, Collapse}  from 'react-bootstrap';
import SkillCard from './SkillCard';
import './../Styles/Skill.css';

const Skill = () => {
    const [open, setOpen] = useState(false);
 return (
     <div className='skillContainer'>
         <Row className="headingRow">
            <Col xs={8} sm={10} md={10}  lg={10} xl={10} >
            <h2>Web Devlopment</h2>
            </Col>
            <Col xs={8} sm={2} md={2}  lg={2} xl={2}>
                <Button className="addbutton" > Add</Button>
            </Col>
         </Row>
        <h5 className="tags">Subskills</h5>
        <Row>
            {
                //tags
            }
        </Row>
        <Row   >
            <Col  xs={8} sm={10} md={10}  lg={10} xl={10}>
        <h3 className='skillName'>HTML</h3>
            </Col>
            <Col>
            <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
            
            </Button>
            </Col>
        </Row>
        <Collapse  in={open}>
            <div id="example-collapse-text">

            <SkillCard />
            </div>
        </Collapse>
        
     </div>
 );   

}

export default Skill;