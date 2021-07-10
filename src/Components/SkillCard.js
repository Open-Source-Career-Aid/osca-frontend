import React from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button}  from 'react-bootstrap';
import './../Styles/skillCard.css';


const SkillCard = (props) => {

    return (

        <div className="skillCard">

        <Row  className="links">
            <Col xs={11} sm={11} md={11}  lg={11} xl={11}>
                {/* <p>  */}
                    https://cdn.discordapp.com/attachments/852968860768010280/.... 
                {/* </p>  */}
            </Col>
            <Col xs={1} sm={1} md={1}  lg={1} xl={1}>
                <Button size="sm" style={styles.copyButton}  onClick={() => {navigator.clipboard.writeText("text")}}>
                    <a>

                    <img style={styles.copyButtonIcon} src="./copy.png" />
                    </a>
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

const styles = {
    copyButton: {
        backgroundColor: 'white',
        border: 'none'
    },
    copyButtonIcon: {
        height: '3vh',
        width: '1.8vw'
    },
    fullWidth: {
        width: '100%'
    }
}

export default SkillCard;