import React from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button}  from 'react-bootstrap';
import './../Styles/skillCard.css';


const SkillCard = (props) => {

    return (

        <div className="skillCard">

        <Row className="links">
            <Col xs={8} sm={10} md={10}  lg={11} xl={11}>
                {/* <p>  */}
                    https://cdn.discordapp.com/attachments/852968860768010280/.... 
                {/* </p>  */}
            </Col>
            <Col xs={1} sm={1} md={1}  lg={1} xl={1}>
                <Button onClick={() => {navigator.clipboard.writeText("text")}}>
                    {/* <img style={{height:'1vh'}} src="./copy.png" /> */}
                </Button>
            </Col>
        </Row>
        <Row>

        <p className='description'> This article contains HTML Basics sikfdnsid fisd fnisj fidfj dif jdifj i.  
jisdjfaksdf knk Hiikfsd fihis f  .jisadjf i.   asdf sdfn uhn dnf djfn djnfu baujsd nfjsd dfsdf ndn fu        </p>
        </Row>
    </div>
        );

}

export default SkillCard;