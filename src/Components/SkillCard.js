import React from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button}  from 'react-bootstrap';
import './../Styles/skillCard.css';


const SkillCard = ({props}) => {
    
    return (
        <>
        {props.map((SkillCard, idx) => {
            return (
                <div className="skillCard">
                <h5 className='py-2'>Installation and setup</h5>
                <Row  className="links ">
                    {SkillCard.links.map((link, idx) => {
                        return (
                            <>
                    <Col style={{maxWidth: '90%', overflow:'hidden'}} xs={10} sm={11} md={11}  lg={11} xl={11}>
                        {/* <p>  */}
                           {link}
                        {/* </p>  */}
                    </Col>
                    <Col xs={2} sm={1} md={1}  lg={1} xl={1}>
                        <Button size="sm" style={styles.copyButton}  onClick={() => {navigator.clipboard.writeText(link)}}>
                            <a>
        
                             <img style={styles.copyButtonIcon} src="./copy.png" />
                            </a>
                        </Button>
                    </Col>
                            </>
                        )
                    })}
                </Row>
                <Row>
        
                <p className='description'>  </p>
                </Row>
            </div>
            )
        })}
        </>
        );

}

const styles = {
    copyButton: {
        backgroundColor: 'white',
        border: 'none'
    },
    copyButtonIcon: {
        height: '1.5em',
        width: '1em'
    },
    fullWidth: {
        width: '100%'
    }
}

export default SkillCard;