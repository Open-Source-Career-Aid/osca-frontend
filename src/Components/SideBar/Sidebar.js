import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import { Row, Col, Button, Collapse } from 'react-bootstrap';

const side_data = [
    {
        name: 'HTML', 
        compo: [
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},

        ]  
    },
    {
        name: 'HTML', 
        compo: [
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},

        ]  
    },
    {
        name: 'HTML', 
        compo: [
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},
            {name: 'installattion and setup'},

        ]  
    },
]

const leftsrc = './../../leftarrow.png';
const upsrc = './../../up.png';

let srcdict = {};
let opendict = {};

let i = 0;
for (i = 0; i <= side_data.length; i++) {
    srcdict[i] = leftsrc;
    opendict[i] = false;
}


const Sidebar = () => {

    const [open, setOpen] = useState(opendict);
    const [src, setSrc] = useState(srcdict);

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

    return (
        <div className='Sidebar'>
            <Col>
            {side_data.map(  (element , idx) => {
                return (
                    <>
                    <Row style={styles.fullWidth} className='align-items-center'  >
                        <Col xs={8} sm={8} md={8} lg={8} xl={8} >
                            <h3 className='skillName'>{element.name}</h3>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2} >
                            <Button
                                style={styles.btn}

                                onClick={() => handleChange(idx)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>
                                <img style={open[idx] ? styles.dropButton : styles.leftbutton} src={src[idx]} />
                            </Button>
                        </Col>
                    </Row>
                    <Collapse in={open[idx]}>
                        <div id="example-collapse-text">

                            <Col>
                                
                                {element.compo.map(topic => {
                                    return (

                                        <h5>{topic.name}</h5>
                                        )
                                })}
                            </Col>
                            
                        </div>
                    </Collapse>
                    <hr />
                </>
               )
            } )}
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

export default Sidebar;