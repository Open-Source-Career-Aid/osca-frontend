import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button}  from 'react-bootstrap';
import './Button.css';

const Addbutton = () => {

    return( 
        <Button style={styles.btn} className='Button'>
            <img style={styles.icon} src='./../../../../../../add.png' />
        </Button>
    );
};

const styles = {
    btn: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        // padding: '0',
    },
    icon: {
        height: '1.3em',
        width: '1.2em'
    }
}

export default Addbutton;